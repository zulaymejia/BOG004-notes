//import React, { useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore/lite";
// import db from "../firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "../firebase/firebaseController";
import { useNavigate } from "react-router-dom";
import "../style.css";
import  {auth}  from "../firebase/firebaseConfig";

//componente que contiene el Login
function Login() {
  const navigate = useNavigate();
  const authGoogle = () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider)
    .then((result) => {
      alert("Wolcome My Noets");
      navigate("/notes");
      console.log(result);
    })
    .catch((error)=>{
console.log("ERROR", error)
    })
  };
  return (
    //JSX como se ve en la interfaz
    <div className="login">
      <h1>Wolcome My Notes</h1>
      <label htmlFor="text"> </label>
        {
          <button onClick={authGoogle} className="button">
            Ingresar con google
          </button>
        }
    </div>
  );
}
export default Login;
