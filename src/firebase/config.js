import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA17g4gkiB1vYXRqKKJHlcnMjQ6_gxK07k",
    authDomain: "olx-clone-4878c.firebaseapp.com",
    projectId: "olx-clone-4878c",
    storageBucket: "olx-clone-4878c.appspot.com",
    messagingSenderId: "1072126185298",
    appId: "1:1072126185298:web:59982832f0c1f16743348b",
    measurementId: "G-5SLYB0JK5M"
  };

export default firebase.initializeApp(firebaseConfig)