import React from "react";
import DetailNote from "../components/layout/DetailNote";
import PropTypes from "prop-types";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/local-data";
import DetailActionButton from "../components/items/Button/DetailButton";
import { useParams } from "react-router-dom";
import NoteTypeData from "../utils/NoteTypeData";

const DetailPageWrapper = ({ archiveNote, unarchiveNote, deleteNote }) => {
  const { id } = useParams();
  return (
    <DetailNotePage
      id={String(id)}
      archiveNote={archiveNote}
      unarchiveNote={unarchiveNote}
      deleteNote={deleteNote}
    />
  );
};

class DetailNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };
  }
  render() {
    return (
      <section className="detail-page">
        <DetailNote notes={this.state.notes} />
        <DetailActionButton
          notes={this.state.notes}
          archiveNote={archiveNote}
          unarchiveNote={unarchiveNote}
          deleteNote={deleteNote}
        />
      </section>
    );
  }
}

DetailPageWrapper.propType = {
  notes: PropTypes.shape(NoteTypeData).isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
