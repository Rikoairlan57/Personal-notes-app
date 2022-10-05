import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../../utils";
import parser from "html-react-parser";

const NoteCard = ({ id, title, body, createdAt }) => {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note_item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note_item__body">{parser(body)}</p>
    </article>
  );
};

NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteCard;
