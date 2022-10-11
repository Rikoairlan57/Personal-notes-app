import React from "react";
import PropTypes from "prop-types";
import AddNoteNewButton from "../Button/AddNoteNewButton";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleInputTitle = this.handleInputTitle.bind(this);
    this.handleInputBody = this.handleInputBody.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleInputTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  handleInputBody(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Title your note"
            value={this.state.title}
            onChange={this.handleInputTitle}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Your note write this...."
            contentEditable
            onInput={this.handleInputBody}
          />
        </div>
        <AddNoteNewButton onSubmit={this.handleOnSubmit} />
      </section>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
