import React from "react";
import "../components/Note.js"

//Para pintar las notas en la interfaz
//Aca recibimos los props
export const Note = ({title, description,editNoteWall}) => {
  
  return (
    <div className="otro">
      <div className="impresas tarjetas">
        <h2>{title}</h2>
        <p>{description}</p>
        <button type="button" onClick={editNoteWall} >
        Editar
      </button>
      </div>
    </div>
  );
};
