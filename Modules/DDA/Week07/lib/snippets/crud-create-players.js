import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  orderByChild,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

//https://firebase.google.com/docs/reference/js/database

//[STEP 1] Get our database reference
//=================================================
const db = getDatabase();

//[STEP 2] Setup our node/path reference
//=================================================
const playerRef = ref(db, "players");

//$("#btn-read").on("click", getPlayerData());,

//Player data structure
//=================================================
//active: <true> | <false> //boolean
//createdOn: timestamp //int
//displayName: displayed name [modifiable] //string
//email: user signed up email //email
//lastLoggedIn: timestamp //int
//updatedOn: timestamp //int
//userName: username [fixed] //string

//[STEP 3] Setup our event listener
//=================================================
var createBtn = document
  .getElementById("btn-create")
  .addEventListener("click", function (event) {
    createPlayer(event, new Date().getTime()); //fake uuid
  });

//[STEP 4] Setup our createPlayer to take in some info
//=================================================
function createPlayer(e, userId) {
  e.preventDefault();
  var currentTimestamp = new Date().getTime();
  var playerData = {
    active: true,
    createdOn: currentTimestamp,
    displayName: "testPlayer",
    email: "someemail@email.com",
    lastLoggedIn: currentTimestamp,
    updatedOn: currentTimestamp,
    userName: "some user name",
  };

  set(ref(db, `players/${userId}`), playerData)
    .then(() => {
      console.log("data saved successfully");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
    });
} //end getPlayerData

onValue(playerRef, (snapshot) => {
  //const data = snapshot.val();
  updatePlayerContent(snapshot);
});

function updatePlayerContent(snapshot) {
  if (snapshot.exists()) {
    //if the data exist
    try {
      //let's do something about it
      var playerContent = document.getElementById("player-content");
      var totalPlayers = document.getElementById("total-players");
      var content = "";
      console.log(`Number of Players: ${snapshot.size}`);

      snapshot.forEach((childSnapshot) => {
        //looping through each snapshot

        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        //console.log("User key: " + childSnapshot.key);
        //console.log("Username: " + childSnapshot.child("username").val());

        content += `<tr>
            <td>${childSnapshot.child("active").val()}</td>
            <td>${childSnapshot.child("clan").val()}</td>
            <td>${childSnapshot.child("createdOn").val()}</td>
            <td>${childSnapshot.child("displayName").val()}</td>
            <td>${childSnapshot.child("email").val()}</td>
            <td>${new Date(
              childSnapshot.child("lastLoggedIn").val() * 1000
            )}</td>
            <td>${new Date(childSnapshot.child("updatedOn").val() * 1000)}}</td>
            <td>${childSnapshot.child("userName").val()}</td>
            <td><a href="#" class="btn btn-primary" id="${
              childSnapshot.key
            }">Edit</a></td>
            </tr>`;
      });

      playerContent.innerHTML = content;
      totalPlayers.innerHTML = `Total Players: ${snapshot.size}`;
    } catch (error) {
      console.log("Error createPlayer" + error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
    }
  }
} //end updatePlayerContent
