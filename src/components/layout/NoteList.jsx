import React from "react";
import PropTypes from "prop-types";
import NoteCard from "../items/Card/NoteCard";

const NoteList = ({ notes }) => {
  if (notes.length > 0) {
    return (
      <section className="notes-list">
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">Notes not found</p>
      </section>
    );
  }
};

NoteList.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default NoteList;
