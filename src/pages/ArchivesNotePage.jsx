import React from "react";
import SearchBar from "../components/items/Input/SearchBar";
import NoteList from "../components/layout/NoteList";
import { LocaleConsumer } from "../components/contexts/LocaleContext";
import useNotes from "../components/hooks/useNotes";
import useSearch from "../components/hooks/useSearch";
import PropTypes from "prop-types";

const ArchivesPageWrapper = () => {
  const [keyword, onKeywordHandler] = useSearch();
  const [notes, isLoading] = useNotes("notactive");

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="archives-page">
            <h2> {locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
            <SearchBar keyword={keyword} keywordChange={onKeywordHandler} />
            <NoteList notes={filteredNotes} isLoading={isLoading} />
          </section>
        );
      }}
    </LocaleConsumer>
  );
};

ArchivesPageWrapper.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchivesPageWrapper;
