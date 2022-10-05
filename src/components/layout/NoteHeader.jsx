import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const NoteHeader = () => {
  return (
    <header>
      <h1>
        <Link to="/">Personal Notes</Link>
      </h1>
      <Navbar />
    </header>
  );
};

export default NoteHeader;
