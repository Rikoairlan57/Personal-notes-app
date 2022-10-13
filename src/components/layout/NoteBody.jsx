import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import DetailNotePage from "../../pages/DetaiNotePage";
import NotFound from "../../pages/NotFound";
import AddNotePage from "../../pages/AddNotePage";
import ArchivesNotePage from "../../pages/ArchivesNotePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import PropTypes from "prop-types";

const NoteBody = ({ authedUser, loginSuccess }) => {
  if (authedUser === null) {
    return (
      <main>
        <Routes>
          <Route path="*" element={<LoginPage loginSuccess={loginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    );
  }

  return (
    <main>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/addnote" element={<AddNotePage />} />
        <Route path="/archives" element={<ArchivesNotePage />} />
        <Route path="/note/:id" element={<DetailNotePage />} />
      </Routes>
    </main>
  );
};

NoteBody.propTypes = {
  authedUser: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired,
};

export default NoteBody;
