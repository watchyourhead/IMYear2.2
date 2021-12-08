//[STEP 1] Base firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  orderByChild,
  orderByValue,
  orderByKey,
  query,
  equalTo,
  startAt,
  startAfter,
  endAt,
  endBefore,
  limitToFirst,
  limitToLast,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";


import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  //setPersistence,
  //signInWithEmailAndPassword,
  //browserSessionPersistence,
  //inMemoryPersistence,
  //browserLocalPersistence, //default
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

//[STEP 2] Setup our base global references to the services
//=================================================
//Must initialize Firebase app w/ config to start
const app = initializeApp(firebaseConfig);
const db = getDatabase(); //db reference
const auth = getAuth(); //auth service reference

const playerContent = document.getElementById("player-content");
const totalPlayers = document.getElementById("player-count");
const playerError = document.getElementById("player-error");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");

const playerStatRef = ref(db, "playerStats");
const levelCompletionLogsRef = ref(db, "levelCompletionLogs");
const playerRef = ref(db, `players`);
//Call and initialize our data -----
getAllPlayerData();
getLatestPlayer();


//[STEP 3: setup event listener to login button]
//=================================================
/*
let btnSignup = document.getElementById("btn-signup");
btnSignup.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;
  let username = document.getElementById("signup-username").value;

  console.log(`Sign-ing up user with ${email} and password ${password}`);
  //[STEP 4: Signup our user]
  signUpUserWithEmailAndPassword(email, password, username);
});*/

/*
let btnSignOut = document.getElementById("btn-signout");
btnSignOut.addEventListener("click", function (e) {
  e.preventDefault();
  signOutUser();
});

let btnShowUpdateProfile = document.getElementById("btn-update-profile");
btnShowUpdateProfile.addEventListener("click", function (e) {
  e.preventDefault();
  //show/hide needed UI
  //load in auth details

  document.getElementById("update-form").style.display = "block";
  let emailInput = document.getElementById("update-email");
  let newPasswordInput = document.getElementById("update-password");
  let repeatPasswordInput = document.getElementById("update-repeat-password");
  let usernameInput = document.getElementById("update-username");

  console.log("auth");
  console.log(auth.currentUser.email);
  emailInput.value = auth.currentUser.email;
  usernameInput.value = auth.currentUser.displayName;

  //update details when click on submit
});
*/

//playerprofile form listener
//process player profile updates once clicked
let btnUpdatePlayerProfile = document.getElementById(
  "btn-update-player-profile"
);

/*
btnUpdatePlayerProfile.addEventListener("click", function (e) {
  e.preventDefault();

  let error = false;
  let email = document.getElementById("update-email").value.trim();
  let newPassword = document.getElementById("update-password").value.trim();
  let repeatPassword = document
    .getElementById("update-repeat-password")
    .value.trim();
  let username = document.getElementById("update-username").value.trim();

  if (newPassword !== repeatPassword) {
    error = true;
  }

  //if there's no errors then process player updates
  if (!error) {
    updateUserDisplayName(username);
    updatePlayerEmail(email);
    updatePlayerPassword(newPassword);

    //once done show msg
    successMsg.innerHTML = `Player Profile updated`;
  }
});*/

//setup observer to listen to auth changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(`User is signed in ${uid}`);
    showLoggedInUI();
  } else {
    // User is signed out
    showNotLoggedInUI();

    // ...
  }
});

function signUpUserWithEmailAndPassword(email, password, username) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //userCredential is our promise that comes back
      console.log(`Signup Success: User details ${userCredential.user}`);
      console.log(
        `User UID ${userCredential.user.uid} ::  Email ${userCredential.user.email}`
      );

      const user = auth.currentUser;
      if (user != null) {
        console.log(
          `Current User details: Email ${user.uid} :: User ID ${user.uid}`
        );
      }
      //update displayname in auth profile
      updateUserDisplayName(username);
      //create new player in database
      createPlayerToDb(user.uid, username, email);

      //@TODO show user UI changes if needed after creating
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
      errorMsg.innerHTML = `ErrorCode: ${errorCode} -> Message: ${errorMessage}`;
    });
}
//check if there's any user
//if there's user then sign out
function signOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("Sign out user success");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
      errorMsg.innerHTML = `ErrorCode: ${errorCode} -> Message: ${errorMessage}`;
    });
}

//get all player data
//show in table
function getAllPlayerData() {
  get(ref(db, `players`)).then((snapshot) => {
    //retrieve a snapshot of the data using a callback
    if (snapshot.exists()) {
      //if the data exist
      try {
        //base table content string
        var content = "";
        console.log(`Number of Players: ${snapshot.size}`);

        snapshot.forEach((childSnapshot) => {
          //looping through each snapshot
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
          //console.log("User key: " + childSnapshot.key);
          //console.log("Username: " + childSnapshot.child("username").val());
          content += `<tr>
        <td>${childSnapshot.key}</td>
        <td>${childSnapshot.child("displayName").val()}</td>
        <td>${childSnapshot.child("clan").val()}</td>
        <td>${new Date(childSnapshot.child("createdOn").val() * 1000)}</td>
        <td>${childSnapshot.child("email").val()}</td>
        <td>${childSnapshot.child("active").val()}</td>
        <td>
        <div class="d-flex order-actions">	<a href="javascript:;" class=""><i class="bx bx-cog"></i></a>
          <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
        </div>
      </td>
        </tr>`;
        });

        playerContent.innerHTML = content;
        totalPlayers.innerHTML = `${snapshot.size}`;
      } catch (error) {
        console.log("Error getPlayerData" + error);
      }
    } else {
      //TODO what if no data ?
      playerError.innerHTML = "No data found";
    }
  });
}

/*
 
 reference: https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
*/
function updateUserDisplayName(newDisplayName) {
  updateProfile(auth.currentUser, {
    displayName: newDisplayName,
  })
    .then(() => {
      console.log(
        `User ${auth.currentUser.uid} profile updated: ${newDisplayName} `
      );
    })
    .catch((error) => {
      //an error occured
      console.log(`Unable to update user profile `);
    });
}

function updatePlayerPassword(newPassword) {
  updatePassword(auth.currentUser, newPassword)
    .then(() => {
      console.log(`Player password updated`);
    })
    .catch((error) => {
      console.log(`Error in updatePlayerPassword`);
    });
}

//create a new player into firebase db
function createPlayerToDb(userId, username, email) {
  console.log("creation called------------------------");

  set(ref(db, `players/${userId}`), new Player(username, email));
} //end createPlayerToDb

//update player data
function updatePlayer(userId, playerData) {
  console.log("update called------------------------");

  const updates = {};
  updates["/players/" + userId + "/displayName"] = "";
  updates["/players/" + userId + "/lastUpdated"] = "";

  updatePlayer(ref(db), updates);
}

function updatePlayerEmail(newEmail) {
  updateEmail(auth.currentUser, newEmail)
    .then(() => {
      console.log(`Email updated`);
    })
    .catch((error) => {
      console.log(`Error in updatePlayerEmail`);
    });
}

console.log("getplayer data");
//get the latest player that was added
async function getLatestPlayer() {
  const latestPlayerRef = query(
    ref(db, "players/"),
    orderByChild("createdOn"),
    limitToLast(1)
  );
  let result = await get(query(latestPlayerRef));
  if (result !== null) {
    //METHOD 1: to skip going through array
    var playerKey = Object.keys(result.val())[0];
    console.log(result.val()[playerKey].active);

    //METHOD 2: to skip going through array
    //convert into an array
    var latestPlayer = Object.values(result.val())[0];
    console.log(latestPlayer);
    console.log(latestPlayer.active);

    //Update our UI
    /*
    document.getElementById("latest-player").innerHTML = 
        `Player Name: ${latestPlayer.displayName} <br/>
         Created On: ${latestPlayer.createdOn} <br/>
         Email: ${latestPlayer.email} <br/>
         Last Logged In: ${latestPlayer.lastLoggedIn}`;
    */

    //METHOD 3: run a loop
    //let latestPlayer = result.val();
    //latestPlayer.forEach((childSnapshot) => {
    //console.log(childSnapshot.key);
    //});
  }
}//end getLatestPlayer


//jquery way
//$("#btn-read").on("click", getPlayerData());
console.log("getplayer data");



//Player Levels -----------------------------------
//=================================================

const MAX_LEVEL = 20;
const BASE_LEVEL = 1;

getPlayerLevelData();

//Setup our player levels function to display info
//READING: https://stackoverflow.com/questions/55458675/filter-is-not-a-function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//=================================================
async function getPlayerLevelData(baseLevel = BASE_LEVEL, maxLevel = MAX_LEVEL) {
  console.log("attempting to get player level content");

  const playerLevelRef = query(ref(db, "playerStats"), orderByChild("level"));

  let totalPlayers = await getTotalPlayers();
  let snapshot = await get(playerLevelRef);
  let levelLogs = await getLevelCompletionLogs();


  let playerContent = document.getElementById("player-level-content");
  let totalPlayersContent = document.getElementById("total-players");
  if (snapshot.exists()) {
    try {
      //if the data exist
      let players = snapshot.val();
      let tableData = "";
      for (var i = baseLevel; i <= maxLevel; i++) {
        var filterPlayersLevel = Object.values(players).filter(
          (player) => player.level === i
        );

        var levelCompletedContent = "";
        if(levelLogs[i-1] !== undefined){
            levelCompletedContent += levelLogs[i-1].completed;
        }else{
            levelCompletedContent = 0;
        }

        tableData += `<tr>
                        <td>${i}</td>
                        <td>
                        <div class="progress radius-10" style="height:4.5px;">
                          <div class="progress-bar bg-primary" role="progressbar" style="width: ${levelCompletedContent/totalPlayers * 100}%"></div>
                        </div>
                        
                        ${levelCompletedContent}</td>
                        <td>
                          <div class="progress radius-10" style="height:4.5px;">
													  <div class="progress-bar bg-primary" role="progressbar" style="width: ${filterPlayersLevel.length/totalPlayers * 100}%"></div>
												  </div>
                          ${filterPlayersLevel.length}
                        </td>
                        <td>
                          <div class="progress radius-10" style="height:4.5px;">
													  <div class="progress-bar bg-primary" role="progressbar" style="width: ${filterPlayersLevel.length/totalPlayers * 100}%"></div>
												  </div>
                          ${filterPlayersLevel.length/totalPlayers * 100}%
                          </td>
                        </tr>`;
        //console.log(`Number of players at level ${i}: ${filterPlayersLevel.length}`);
        //console.log(`% of players at level ${i}: ${filterPlayersLevel.length/totalPlayers*100} %`);
       }//end loop
      console.log(`Total number of player stats: ${snapshot.size}`);
      console.log(`total Players in Game: ${totalPlayers}`);
      console.log(`Data discrepencies: ${totalPlayers - snapshot.size}`);
      
      //update UI
      playerContent.innerHTML = tableData;
      totalPlayersContent.innerHTML = `Total Players: ${totalPlayers}`;

    } catch (error) {
        console.log("Error getPlayerLevelData" + error);
    }
  }
}

async function getTotalPlayers() {
  var totalPlayers = await get(playerRef);
  return totalPlayers.size;
}

async function getLevelCompletionLogs(){
    const playerLevelCompletionRef = query(levelCompletionLogsRef, orderByKey());
    let levelCompletionList = [];

    let levelCompletionLogs = await get(levelCompletionLogsRef);
    if(levelCompletionLogs !== null){
        
        levelCompletionLogs.forEach((childSnapshot) => {
            console.log(`Level ${childSnapshot.key}: ${childSnapshot.size}`);
            console.log("running level list ");
            levelCompletionList.push({"level": childSnapshot.key, "completed": childSnapshot.size});
        });
    }
    return levelCompletionList;
}

//------------------------------------
//function based object for our player
function Player(userName, email, clan = "blue") {
  let currentTimeStamp = Date.now();

  this.active = true;
  this.clan = "blue";
  this.createdOn = currentTimeStamp;
  this.userName = userName;
  this.displayName = displayName;
  this.email = email;
  this.lastLoggedIn = currentTimeStamp;
  this.updatedOn = currentTimeStamp;
}

function showLoggedInUI() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "none";
  document.getElementById("update-form").style.display = "none";
  document.getElementById("btn-signout").style.display = "block";
  document.getElementById("btn-update-profile").style.display = "block";
}

function showNotLoggedInUI() {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "block";
  document.getElementById("update-form").style.display = "block";
  document.getElementById("btn-signout").style.display = "none";
  document.getElementById("btn-update-profile").style.display = "none";
}
