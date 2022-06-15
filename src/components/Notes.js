import React, { Fragment } from "react";
import { saveNote, getNotes,editNote } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";
import "../components/Notes.css";
import {Note} from "./Note"
import { useNavigate } from "react-router-dom";

//componente de las notas
const Notes = () => {
  //declarando variables de estado
  // const [description, setCommentText] = useState(""); //inicialización del estado
  // const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]); //El estado inicial
  const [thisNote,setThisNote] =useState({
    title:"",
    description: "",
    id:""
  })
  //Cerrar sesión con el boton
  let Navigate= useNavigate()
  function signOff(e){
    e.preventDefault();
    console.log("click")
    Navigate("/")
  }

  //guardar la nota
  const saveNoteWall = () => {
    if(!thisNote.id){
      saveNote(thisNote.title, thisNote.description)
    }else{
      editNote(thisNote.id, thisNote.title, thisNote.description)
      setThisNote({
        title:"",
        description:"",
        id:""
      })
    }
    getListNotes();
  };
  //traer las notas
  useEffect(() => {
    getListNotes();
    console.log(notes);
  }, []);
  const getListNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
    console.log(notes);
  };
//Para editar las notas
  const editNoteWall = (note)=>{
setThisNote(note)
  }
  const setTitle = (title) =>{
    setThisNote((prev)=>({...prev,
      title
    }))
  }
  const setDescription = (description) =>{
    setThisNote((prev)=>({...prev,
      description
    }))
  }
  return (
    <div className="imag">
      <h1 className="title">Wolcome My Notes</h1>
    
      <div>
        <img
          className="alga"
          // src={require("../Imagenes/burbujasSinfondo.png")}
        />
      </div>
      <input
        className="texInput"
        value={thisNote.title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titulo"
      />

      <textarea
        className="textnote"
        value={thisNote.description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripcion"
      />
      <button className="public" onClick={saveNoteWall}>
        Publicar
      </button>
      {notes.map((note, index) => (
        <Fragment key={index}>
         <Note 
          // className="impresas tarjetas"
          title={note.title} 
          description={note.description}
          editNoteWall={() => {editNoteWall(note)}}
          />
        </Fragment>
         
        ))}
      <div>
      <button className="public" onClick={signOff}>
       Cerrar seción
      </button>
        
   {/* <img className="alga" src={require("../Imagenes/algasSinfondo.png")} /> */}
      </div>
    </div>
  );
};

export default Notes;
