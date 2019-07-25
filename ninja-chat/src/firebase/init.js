import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCaPaQxNijBr_JJ7PCUq_5Y0cqiYovf_Rs",
    authDomain: "chattingninjas.firebaseapp.com",
    databaseURL: "https://chattingninjas.firebaseio.com",
    projectId: "chattingninjas",
    storageBucket: "chattingninjas.appspot.com",
    messagingSenderId: "1060249895049",
    appId: "1:1060249895049:web:48e079b3698495ce"
  };
  // Initialize Firebase
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()

