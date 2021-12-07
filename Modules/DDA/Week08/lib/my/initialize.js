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
const db = getDatabase();//db reference
const auth = getAuth();//auth service reference 