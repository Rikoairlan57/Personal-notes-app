import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/network-data";
import DetailNote from "../components/layout/DetailNote";
import DetailButton from "../components/items/Button/DetailButton";
import NoteTypeData from "../utils/NoteTypeData";

const DetailNotePage = () => {
  const { id } = useParams();
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNotes(data);
    });
  }, [id]);

  const onArchiveNoteHandler = async (note) => {
    await archiveNote(note);
    navigate("/archives");
  };

  const onunArchiveNoteNoteHandler = async (note) => {
    await unarchiveNote(note);
    navigate("/");
  };

  const onunDeleteNoteHandler = async (note) => {
    await deleteNote(note);
    navigate("/");
  };

  return (
    <section className="detail-page">
      <DetailNote notes={notes} />
      <DetailButton
        notes={notes}
        archiveNote={onArchiveNoteHandler}
        unarchiveNote={onunArchiveNoteNoteHandler}
        deleteNote={onunDeleteNoteHandler}
      />
    </section>
  );
};

DetailNotePage.propType = {
  notes: PropTypes.shape(NoteTypeData).isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DetailNotePage;
