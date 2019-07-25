  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDqBDSkIm0kqkx5y4bmEfKpw7YqYOLl1e8",
    authDomain: "geoninjasudemy.firebaseapp.com",
    databaseURL: "https://geoninjasudemy.firebaseio.com",
    projectId: "geoninjasudemy",
    storageBucket: "",
    messagingSenderId: "288991324604",
    appId: "1:288991324604:web:43755231f365356b"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()