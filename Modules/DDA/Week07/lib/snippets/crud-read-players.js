
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

//[STEP 3] Setup our event listener
//=================================================
var readBtn = document
  .getElementById("btn-read")
  .addEventListener("click", getPlayerData);
//$("#btn-read").on("click", getPlayerData());

//Player data structure
//=================================================
//active: <true> | <false> //boolean
//createdOn: timestamp //int
//displayName: displayed name [modifiable] //string
//email: user signed up email //email
//lastLoggedIn: timestamp //int
//updatedOn: timestamp //int
//userName: username [fixed] //string

//[STEP 4] Setup our player function to display info
//=================================================
function getPlayerData(e) {
  e.preventDefault();
  //playerRef is declared at the top using a constant
  //const playerRef = ref(db, "players");
  //get(child(db,`players/`))
  get(playerRef).then((snapshot) => {
    //retrieve a snapshot of the data using a callback
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
          <td>${new Date(childSnapshot.child("lastLoggedIn").val() * 1000)}</td>
          <td>${new Date(childSnapshot.child("updatedOn").val() * 1000)}}</td>
          <td>${childSnapshot.child("userName").val()}</td>
          <td><a href="#" class="btn btn-primary" id="${childSnapshot.key}">Edit</a></td>
          </tr>`;
        });
        
        playerContent.innerHTML = content; 
        totalPlayers.innerHTML = `Total Players: ${snapshot.size}`;
      } catch (error) {
        console.log("Error getPlayerData" + error);
      }
    }else{
        //TODO what if no data ?
    }
  });
} //end getPlayerData

