import React from "react";
import NoteBody from "./components/layout//NoteBody";
import NoteHeader from "./components/layout/NoteHeader";

function App() {
  return (
    <div className="app-container">
      <NoteHeader />
      <NoteBody />
    </div>
  );
}

export default App;
