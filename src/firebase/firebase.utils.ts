import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  // collection,
  doc,
  // getDoc,
  getDocFromServer,
  setDoc,
} from "firebase/firestore";

import { createBrowserHistory } from "history";
const history = createBrowserHistory();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyAKWfvWPTElx7JXAWmxh4B8xKUO3g3Gu7c",
  authDomain: "e-commerce-c57c8.firebaseapp.com",
  projectId: "e-commerce-c57c8",
  storageBucket: "e-commerce-c57c8.appspot.com",
  messagingSenderId: "401909970062",
  appId: "1:401909970062:web:bffedfb447613e902145df",
  measurementId: "G-L0KLQCVNEV",
};
// Initialise Firebase app
initializeApp(config);

// Create Auth functionality
export const auth = getAuth();
// Get Firestore Database
// NOTE: in Firestore docs, you'll often see the variable 'db' used instead of 'firestore'.
export const db = getFirestore();
console.log(auth, db, "this is auth and db");

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  // if (!userAuth) return;

  const userDocRef = doc(db, `users/${userAuth.uid}`);
  const userDocSnap = await getDocFromServer(userDocRef);

  if (!userDocSnap.exists()) {
    console.log(
      userAuth,
      "this is User Auth - userDocSnap does not exist creating it"
    );
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error(`ME Error creating user`, error);
    }
  } else {
    // console.log(
    //   "userDocRef already there firebase utils user already created in firestore db"
    // );
  }

  return userDocRef;
};

// Create Google Auth Provider
const provider = new GoogleAuthProvider();
// Configure provider options
provider.setCustomParameters({ prompt: "select_account" });

//
export const signInWithGoogle = () => {
  //  In v8, 'auth.signInWithPopup(provider)' was called. In v9, 'signInWithPopup' is no longer namespaced, so 'auth' has to be passed as a parameter.
  signInWithPopup(auth, provider)
    .then((result) => {
      history.push("/");
      window.location.reload();
    })

    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used
      const email = error.email;
      // The AuthCredential type that was used
      const credential = GoogleAuthProvider.credentialFromError(error);
      // Do whatever to handle error
      console.error(
        {
          errorCode,
          errorMessage,
          email,
          credential,
        },
        "MYERROR"
      );
    });
};
