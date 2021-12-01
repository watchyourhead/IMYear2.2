/*
Sample Template for firebase setup
*/
//imported libraries 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import {
  getAuth,
  initializeAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  onValue,
  orderByChild,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

//insert your own db config
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//retrieve database link 
const db = getDatabase();

//get related reference nodes
const playerRef = ref(db, "players");
const playerStatsRef = ref(db, "playerStats");

