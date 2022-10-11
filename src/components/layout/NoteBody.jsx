import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import DetailNotePage from "../../pages/DetaiNotePage";
import NotFound from "../../pages/NotFound";
import AddNotePage from "../../pages/AddNotePage";
import ArchivesNotePage from "../../pages/ArchivesNotePage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const NoteBody = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note" element={<Navigate to="/" replace />} />
        <Route path="/note/:id" element={<DetailNotePage />} />
        <Route path="/addnote" element={<AddNotePage />} />
        <Route path="/archives" element={<ArchivesNotePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default NoteBody;
