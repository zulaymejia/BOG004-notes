// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDABCWbI3umyF_OzHR_5H5gw5vOzM6x9ls",
    authDomain: "labnote-d183f.firebaseapp.com",
    projectId: "labnote-d183f",
    storageBucket: "labnote-d183f.appspot.com",
    messagingSenderId: "97709153916",
    appId: "1:97709153916:web:8f584c35d629c0972933f9"
  };
  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export const auth= getAuth(app)
export default db;