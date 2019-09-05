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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If there is no userAuth
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
