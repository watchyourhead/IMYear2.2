//Reference: https://firebase.google.com/docs/auth/web/auth-state-persistence#web-version-9
//https://firebase.google.com/docs/reference/js/auth.md#createuserwithemailandpassword
//https://firebase.google.com/docs/reference/js/auth.usercredential.md#usercredential_interface
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
  //setPersistence,
  //signInWithEmailAndPassword,
  //browserSessionPersistence,
  //inMemoryPersistence,
  //browserLocalPersistence, //default
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    child,
    get,
    set,
    onValue,
    orderByChild,
  } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
//[STEP 1: Setup the auth]
//=================================================
const auth = getAuth();
const db = getDatabase();

//[STEP 2: Get core form elements]
//=================================================
let btnSignup = document.getElementById("btn-signup"); //signup btn
let btnSignout = document.getElementById("btn-signout");
//status msg 
let statusMsg = document.getElementById("status-msg");
let errorMsg = document.getElementById("error-msg");
let frmLogin = document.getElementById("form-user");

//[OPTIONAL: observer that listens to any auth changes]
//we can setup an observer that listens to any auth updates 
//------------------------------------------------
onAuthStateChanged(auth, (currentUser) => {
    
    if (currentUser) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = currentUser.uid;
      statusMsg.innerHTML = `(OnAuthStateChanged) Welcome back: ${currentUser.email} :: ${currentUser.uid}`;
      console.log(`(OnAuthStateChanged) Current user is logged in: ${currentUser.email} :: ${currentUser.uid}`);
      frmLogin.style.display = "none";
      btnSignout.style.display = "block";

      //$("#form-user").show();
      //$("#btn-signout").hide();
      //$("#status-msg").html(`(OnAuthStateChanged) Welcome back: ${currentUser.email} :: ${currentUser.uid}`);
      //@TODO prevent signup options from appearing
    } else {
      frmLogin.style.display = "block";
      btnSignout.style.display = "none";
      statusMsg.innerHTML = `Please sign up or login into the system`;
      
      //$("#form-user").show();
      //$("#btn-signout").hide();
      //$("#status-msg").html(`Please sign up or login into the system`);
    }
  });

//[STEP 3: setup event listener to login button]
//=================================================
btnSignup.addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  //let email = $("#email").val();
  //let password = $("#password").val();
  console.log(`Sign-ing up user with ${email} and password ${password}`);
  //[STEP 4: Signup our user]
  signUpUserWithEmailAndPassword(email, password);
});

//[OPTIONAL: setup a signout user option]
btnSignout.addEventListener("click", function (e) {
    e.preventDefault();
    signOutUser();
  });

//[STEP 4: Signup our user]
//=================================================
//https://firebase.google.com/docs/reference/js/auth.md#createuserwithemailandpassword
//https://firebase.google.com/docs/reference/js/auth.usercredential.md#usercredential_interface
function signUpUserWithEmailAndPassword(email, password) {
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
      //other user details related to auth
      //const user = auth.currentUser;
      /*
      if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        }
      */
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

//[STEP 5] Setup our player function to display info
//=================================================
function createPlayer(e, userId, playerData) {
    console.log("creation called");
    e.preventDefault();
    console.log("yes..");
    //playerRef is declared at the top using a constant
    //const playerRef = ref(db, "players");
    //get(child(db,`players/`))
    set(ref(db, `players/${userId}`), 
      playerData);
  } //end getPlayerData