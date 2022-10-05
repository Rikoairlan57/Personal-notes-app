import React from "react";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage__action">
      <button
        className="action"
        type="button"
        title="add"
        onClick={() => navigate("/addnote")}
      >
        <GrAdd />
      </button>
    </div>
  );
};

export default AddButton;
