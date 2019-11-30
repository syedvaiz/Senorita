import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()