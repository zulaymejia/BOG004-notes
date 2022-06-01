import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export {initializeApp, getFirestore,getAuth,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup};

//Login con google
// export const authGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     return signInWithPopup(auth);
//   };