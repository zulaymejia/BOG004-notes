import React from "react";
import { saveNote, getNotes } from "../firebase/firebaseConfig";
import { useState, useEffect } from "react";
import "../components/Notes.css";

//componente de las notas
const Notes = () => {
  //declarando variables de estado
  const [description, setCommentText] = useState(""); //inicialización del estado
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState([]); //El estado inicial

  //guardar la nota
  const saveNoteWall = () => {
    saveNote(title, description);
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
  return (
    <div className="imag">
      <h1 className="title">Hello Notes</h1>
      <div>
        <img
          className="alga"
          // src={require("../Imagenes/burbujasSinfondo.png")}
        />
      </div>
      <input
        className="texInput"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titulo"
      />

      <textarea
        className="textnote"
        value={description}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Descripcion"
      />
      <button className="public" onClick={saveNoteWall}>
        Publicar
      </button>
      {notes.map((note, index) => (
          <div className="impresas tarjetas" key={index}>
            <p>{note.title}</p>
            <p>{note.description}</p>
          </div>
        ))}
      <div>
   {/* <img className="alga" src={require("../Imagenes/algasSinfondo.png")} /> */}
      </div>
    </div>
  );
};

export default Notes;
