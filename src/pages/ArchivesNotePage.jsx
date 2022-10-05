import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/items/Input/SearchBar";
import NoteList from "../components/layout/NoteList";
import { getArchivedNotes } from "../utils/local-data";
import PropTypes from "prop-types";

const ArchivesPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword: keyword });
  };

  return (
    <ArchivesNotePage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
};

class ArchivesNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="archives-page">
        <h2>Archive Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={notes} />
      </section>
    );
  }
}

ArchivesPageWrapper.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default ArchivesPageWrapper;
