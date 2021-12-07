import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,//just current usage/current tab only
  inMemoryPersistence,//no persistence
  browserLocalPersistence, //default - persist all the way until signout
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

//[STEP 1: Setup the site]
const auth = getAuth();

//[STEP 2: Get form data]
//=================================================
//formid
//input
//value
let frmLogin = document.getElementById("form-user");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btn-login");
let cboRemember = document.getElementById("cbo-remember");

//[STEP 3: setup event listener to login button]
//=================================================
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  //[STEP 4: Decide on persistence value]
  //=================================================
  var authtype = browserSessionPersistence;
  if (document.querySelector('.cbo-remember:checked')) {
    authtype = browserLocalPersistence;
  }

  loginWithPersistence(email, password, authtype);
});

//[STEP 4: Decide on persistence value]
//=================================================
//HOW to set persistence
//setPersistence(<authobj>, <typeofpersistence>);
//setPersistence(auth, browserLocalPersistence);

function loginWithPersistence(email, password, authtype) {
  setPersistence(auth, authtype)
    .then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      console.log("Attempting to sign in ");
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`ErrorCode: ${errorCode} -> Message: ${errorMessage}`);
    });
}
