import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const DetailButton = ({ notes, archiveNote, unarchiveNote, deleteNote }) => {
  if (notes.archived === true) {
    return (
      <div className="add-new-page__action">
        <Link to="/archives">
          <button className="action" type="button">
            <BsFillBackspaceFill />
          </button>
        </Link>
        <button
          className="action"
          type="button"
          title="UnArchive"
          onClick={() => {
            unarchiveNote(notes.id);
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
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  } else {
    return (
      <div className="add-new-page__action">
        <Link to="/">
          <button className="action" type="button">
            <BsFillBackspaceFill />
          </button>
        </Link>
        <button
          className="action"
          type="button"
          title="Archive"
          onClick={() => {
            archiveNote(notes.id);
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
          }}
        >
          <AiFillDelete />
        </button>
      </div>
    );
  }
};

DetailButton.propTypes = {
  notes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailButton;
