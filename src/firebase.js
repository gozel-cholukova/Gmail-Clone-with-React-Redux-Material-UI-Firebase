import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBGUl0e-81pK7KiRIEXJOpjFVeAhew8xl0",
  authDomain: "clone-3ce2c.firebaseapp.com",
  projectId: "clone-3ce2c",
  storageBucket: "clone-3ce2c.appspot.com",
  messagingSenderId: "1031917296088",
  appId: "1:1031917296088:web:ea465ffa3e5bdac798baad",
  measurementId: "G-TF7D9P9H3N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };