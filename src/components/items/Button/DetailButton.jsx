import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import NoteTypeData from "../../../utils/NoteTypeData";

const DetailButton = ({ notes, archiveNote, unarchiveNote, deleteNote }) => {
  const navigate = useNavigate();

  if (notes.archived === true) {
    return (
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="UnArchive"
          onClick={() => {
            unarchiveNote(notes.id);
            navigate("/archives");
          }}
        >
          <BiArchiveOut />
        </button>

        <button
          className="action"
          type="button"
          title="Delete"
          onClick={() => {
            deleteNote(notes.id);
            navigate("/archives");
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  } else {
    return (
      <div className="add-new-page__action">
        <button
          className="action"
          type="button"
          title="Archive"
          onClick={() => {
            archiveNote(notes.id);
            navigate("/");
          }}
        >
          <BiArchiveIn />
        </button>
        <button
          className="action"
          type="button"
          title="Delete"
          onClick={() => {
            deleteNote(notes.id);
            navigate("/");
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  }
};

DetailButton.propTypes = {
  notes: PropTypes.shape(NoteTypeData),
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailButton;
