import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDone } from "react-icons/md";
import { BsFillBackspaceFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddNoteNewButton = ({ onSubmit }) => {
  return (
    <div className="add-new-page__action">
      <Link to="/">
        <button className="action" type="button">
          <BsFillBackspaceFill />
        </button>
      </Link>
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
