 
 import firebase from "firebase"
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBRXm-J_fgSuiYSOnEyC82FHhICtxLtMUQ",
    authDomain: "ninjasmoothies-e486f.firebaseapp.com",
    databaseURL: "https://ninjasmoothies-e486f.firebaseio.com",
    projectId: "ninjasmoothies-e486f",
    storageBucket: "ninjasmoothies-e486f.appspot.com",
    messagingSenderId: "605498761672",
    appId: "1:605498761672:web:375f4dd1a4f272ba"
  };
  // Initialize Firebase
 const firebaseapp =  firebase.initializeApp(firebaseConfig);

 // exporting firestore database

 export default firebaseapp.firestore()