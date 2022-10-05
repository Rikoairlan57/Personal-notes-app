import React from "react";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/items/Input/NoteInput";

const AddNotePage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = (note) => {
    addNote(note);
    navigate("/");
  };

  return <NoteInput addNote={onAddNoteHandler} />;
};

export default AddNotePage;
