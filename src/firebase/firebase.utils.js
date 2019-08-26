import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBDOb8TXqhVXsXoBeyEDSOELIYkvaf_FJE",
  authDomain: "good-clothing-db.firebaseapp.com",
  databaseURL: "https://good-clothing-db.firebaseio.com",
  projectId: "good-clothing-db",
  storageBucket: "",
  messagingSenderId: "965471422858",
  appId: "1:965471422858:web:8f8aae20655e2560"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
