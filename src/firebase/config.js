import firebase from "firebase";
import 'firebase/firebase'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhqsd8tYSFYNE_qcxJWUR26JqyeQjZdvc",
  authDomain: "cobalt-bliss-364705.firebaseapp.com",
  projectId: "cobalt-bliss-364705",
  storageBucket: "cobalt-bliss-364705.appspot.com",
  messagingSenderId: "921980405470",
  appId: "1:921980405470:web:13dc9932d8ec9755e4644f",
  measurementId: "G-KH8DG55XYJ"
};

  export default firebase.initializeApp(firebaseConfig)