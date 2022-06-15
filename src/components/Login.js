import { useNavigate } from "react-router-dom";
import "../components/Login.css";
import { loginGoogle } from "../firebase/firebaseConfig";
console.log("LOGIN", loginGoogle);

//componente que contiene el Login
function Login() {
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    loginGoogle()
      .then((result) => {
      //  alert("Wolcome My Noets");
     
        navigate("/notes");
        console.log(result);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
  return (
    //JSX como se ve en la interfaz
    <div className="login">
      <div>
      <img className="logotipo" src={require("../Imagenes/my notes2.png")} />
      </div>
      <h1>Wolcome My Notes</h1>
      <div className="medusaDos">
      <img className="medusaDos" src={require("../Imagenes/medusa.png")} />
      <img className="medusaDos" src={require("../Imagenes/medusa.png")} />
      </div>
      
      <div className="medusaUno"><h2 className="medusa"></h2></div>
      <label htmlFor="text"> </label>
      {
        <button onClick={loginWithGoogle} className="button">
        
          Ingresar con google
        </button>
      }
    <div className="alga">
      <img className="alga" src={require("../Imagenes/alga.png")} />
      </div>
    </div>
    
  );
}
export default Login;
