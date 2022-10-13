import React from "react";
import NoteList from "../components/layout/NoteList";
import SearchBar from "../components/items/Input/SearchBar";
import AddButton from "../components/items/Button/AddButton";
import { LocaleConsumer } from "../components/contexts/LocaleContext";
import useNotes from "../components/hooks/useNotes";
import useSearch from "../components/hooks/useSearch";

const HomePage = () => {
  const [keyword, onKeywordChangeHandler] = useSearch();
  const [notes, isLoading] = useNotes("active");

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section className="homepage">
            <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
            <SearchBar
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
            <NoteList notes={filteredNotes} isLoading={isLoading} />
            <AddButton />
          </section>
        );
      }}
    </LocaleConsumer>
  );
};

export default HomePage;
