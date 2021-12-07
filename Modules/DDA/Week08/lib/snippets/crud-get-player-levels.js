/*
 Simple script to get player stats and display in a table 
 Use vanilla js 
 Reading Reference
 READING: https://stackoverflow.com/questions/55458675/filter-is-not-a-function
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 */

import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  orderByKey,
  orderByChild,
  orderByValue,
  query,
  equalTo,
  startAt,
  startAfter,
  endAt,
  endBefore,
  limitToFirst,
  limitToLast,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

//[STEP 1] Get our database reference
//=================================================
const db = getDatabase();

//[STEP 2] Setup our node/path reference
//=================================================
const playerStatRef = ref(db, "playerStats");
const playerRef = ref(db, "players");
const levelCompletionLogsRef = ref(db, "levelCompletionLogs");

//[STEP 3] Setup our event listener
//=================================================
let readBtn = document
  .getElementById("btn-read")
  .addEventListener("click", getPlayerLevelData);

//jquery way
//$("#btn-read").on("click", getPlayerData());

//Player Stats Data structure
//=================================================

const MAX_LEVEL = 20;
const BASE_LEVEL = 1;

//[STEP 4] Setup our player levels function to display info
//READING: https://stackoverflow.com/questions/55458675/filter-is-not-a-function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
//=================================================
async function getPlayerLevelData(e, baseLevel = BASE_LEVEL, maxLevel = MAX_LEVEL) {
  e.preventDefault();

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
                        <td>${levelCompletedContent}</td>
                        <td>${filterPlayersLevel.length}</td>
                        <td>${filterPlayersLevel.length/totalPlayers * 100}</td>
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

//non-async method
/*
function getTotalPlayers() {
  get(playerRef).then((snapshot) => {
    if (snapshot.exists()) {
      try {
        console.log(`Total Players: ${snapshot.size}`);
        //return snapshot.size;
      } catch (error) {}
    }
  });
}
*/
