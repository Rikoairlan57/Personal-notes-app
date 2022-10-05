import React from "react";
import NoteList from "../components/layout/NoteList";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/items/Input/SearchBar";
import AddButton from "../components/items/Button/AddButton";
import PropTypes from "prop-types";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  const changeSearchParams = (keyword) => {
    setSearchParams({ keyword: keyword });
  };

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
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
      <section className="homepage">
        <h2>Active Notes</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NoteList notes={notes} />
        <AddButton />
      </section>
    );
  }
}

HomePageWrapper.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func,
};

export default HomePageWrapper;
