import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDone } from "react-icons/md";

const AddNoteNewButton = ({ onSubmit }) => {
  return (
    <div className="add-new-page__action">
      <button className="action" type="button" title="Save" onClick={onSubmit}>
        <MdOutlineDone />
      </button>
    </div>
  );
};

AddNoteNewButton.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddNoteNewButton;
