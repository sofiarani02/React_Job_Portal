// // firebase.jsx
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// // Initialize Firebase with your project config
// const firebaseConfig = {
//   apiKey: "AIzaSyBsQO3fzukqKagC6_HnVgAzNG7OpBZfmzLk",
//   authDomain: "login-81fd0.firebaseapp.com",
//   projectId: "login-81fd0",
//   storageBucket: "login-81fd0.appspot.com",
//   messagingSenderId: "133358352379",
//   appId: "1:133358352379:web:532a5addb4044e92183d5e",
//   measurementId: "G-Z9Y4NKL3K1"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const firestore = firebase.firestore();

// export { firestore };


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQO3fzukqKagC6_HnVgAzNG7OpBZfmzLk",
  authDomain: "login-81fd0.firebaseapp.com",
  projectId: "login-81fd0",
  storageBucket: "login-81fd0.appspot.com",
  messagingSenderId: "133358352379",
  appId: "1:133358352379:web:256bbe00144e6523183d5e",
  measurementId: "G-JCZXTS7X8F"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const db = getFirestore();

// Set session persistence to 'LOCAL'
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Session persistence set successfully.");
  })
  .catch((error) => {
    console.error("Error setting session persistence:", error);
  });
export { app, auth, googleAuthProvider, db };

