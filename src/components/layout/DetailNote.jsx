import React from "react";
import PropTypes from "prop-types";
import NoteTypeData from "../../utils/NoteTypeData";
import { showFormattedDate } from "../../utils";

const DetailNote = ({ notes }) => {
  return (
    <div>
      <h3 className="detail-page__title">{notes.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(notes.createdAt)}
      </p>
      <div className="detail-page__body">{notes.body}</div>
    </div>
  );
};

DetailNote.propTypes = {
  notes: PropTypes.shape(NoteTypeData),
};

export default DetailNote;
