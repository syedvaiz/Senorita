import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAelw3_W8sGFEcQzrTfMTgECrKUniEZDhs",
    authDomain: "senor-chat.firebaseapp.com",
    databaseURL: "https://senor-chat.firebaseio.com",
    projectId: "senor-chat",
    storageBucket: "senor-chat.appspot.com",
    messagingSenderId: "239605714442",
    appId: "1:239605714442:web:c886fdab8d68ad647459f3",
    measurementId: "G-H7SH4Y6MSD"
  };
  // Initialize Firebase
  const firebaseAPP = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebaseApp.firestore().settings({ timestampsInSnapshots: true})


export default firebaseApp.firestore()