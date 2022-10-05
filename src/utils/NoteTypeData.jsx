import PropTypes from "prop-types";

const NoteTypeData = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
};

export default NoteTypeData;
