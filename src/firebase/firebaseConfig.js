// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { collection, addDoc, getDocs, getDoc, updateDoc, doc,  deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDABCWbI3umyF_OzHR_5H5gw5vOzM6x9ls",
  authDomain: "labnote-d183f.firebaseapp.com",
  projectId: "labnote-d183f",
  storageBucket: "labnote-d183f.appspot.com",
  messagingSenderId: "97709153916",
  appId: "1:97709153916:web:8f584c35d629c0972933f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//Login google
export const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

//Para guardar las notas
export const saveNote = async (title, description, userId) => {
  // const db = getFirestore();
  const docRef = await addDoc(
    //variable!
    collection(db, "nota"),
    {
      title: title,
      description: description,
      //userId: userId
    }
  );
  console.log(docRef);
};
//Para traer Notas
export const getNotes= async() => {
  const data = await getDocs(collection(db, 'nota'));
  const notes = [];
  data.forEach(item =>{
    //console.log("dataaa", item.data());
    notes.push({title: item.data().title, description: item.data().description, id:item.id})
  })
  return notes;
  }
  // Para traer las notas y editarlas
  export const getNote= async (id) => {
    const db = getFirestore();
   const noteEdit = await getDoc(doc(db, 'nota', id));
   console.log('holaaa', noteEdit)
   return noteEdit;
 };

 //Para Actucalizar la Nota editada 
 export const editNote = async(id, title, description) =>{
 const note= doc(db, "nota", id);
 await updateDoc(note, {
   title,
   description
 });
};
//Eliminar la nota
export const deleteNote= (id) => {
  const db = getFirestore(); 
  deleteDoc(doc(db, 'nota', id));
};