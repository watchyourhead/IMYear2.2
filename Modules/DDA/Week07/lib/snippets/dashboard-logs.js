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
const dailyActiveUsers = ref(db, "dailyActiveUsers");

get(dailyActiveUsers).then((snapshot) => {
  //retrieve a snapshot of the data using a callback
  if (snapshot.exists()) {
    //if the data exist
    try {
      //let's do something about it
      //var playerContent = document.getElementById("player-content");
      //var totalPlayers = document.getElementById("total-players");
      var content = "";
      console.log(`Number of Players: ${snapshot.size}`);
      var dates = [];
      var logs = [];
      snapshot.forEach((childSnapshot) => {
        console.log(`looping child`);
        console.log(`Number of Players: ${childSnapshot.key}`);

        dates.push(childSnapshot.key);
        logs.push(childSnapshot.size);
        console.log(`looping child size:  ${childSnapshot.size}`);
      });
      makeChart(dates, logs);
    } catch (error) {}
  }
}); //end get

function makeChart(dates, logData) {
  console.log(logData);
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,//xaxis
      datasets: [
        {
          label: "# of Active Users",
          data: logData, //yaxis
          borderWidth: 1,
          borderColor: "#8e5ea2",
          backgroundColor: "rgb(142, 94, 162, 0.2)",
          lineTension: 0.4,        
          fill: true,
          borderWidth: 3
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks:{
              stepSize:1,
              beginAtZero: true,
          }
        }
      },
    },
  });
  myChart.canvas.parentNode.style.height = '800px';
  myChart.canvas.parentNode.style.width = '800px';
 
}
