import React from "react";
import PropTypes from "prop-types";
import NoteCard from "../items/Card/NoteCard";
import NoteTypeData from "../../utils/NoteTypeData";
import CircleLoading from "../items/Loading/CircleLoading";

const NoteList = ({ notes, isLoading }) => {
  if (notes.length > 0) {
    return (
      <section className="notes-list">
        {notes.map((note) =>
          isLoading === true ? (
            <CircleLoading key={note.id} />
          ) : (
            <NoteCard key={note.id} {...note} isLoading={isLoading} />
          )
        )}
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
  notes: PropTypes.arrayOf(PropTypes.shape(NoteTypeData)).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default NoteList;
