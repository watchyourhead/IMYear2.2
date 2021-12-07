//config settings derived from firebase console
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEAnD8OOjzMWtgRvUNToMvO9Lb1Hrw85I",
  authDomain: "malcolm-firebase-playground.firebaseapp.com",
  databaseURL: "https://malcolm-firebase-playground-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "malcolm-firebase-playground",
  storageBucket: "malcolm-firebase-playground.appspot.com",
  messagingSenderId: "230335199521",
  appId: "1:230335199521:web:92af2df57e1323800de660",
  measurementId: "G-05SHWW478M"
  };
  
  const app = initializeApp(firebaseConfig);