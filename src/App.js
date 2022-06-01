import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./components/Notes.js"
import Login from "./components/Login.js";


const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/notes" element={<Notes/>} />
      </Routes>
    );
  };

  export default Router;
