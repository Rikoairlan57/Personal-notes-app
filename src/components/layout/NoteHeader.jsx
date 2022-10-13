import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { MdOutlineGTranslate, MdLogout } from "react-icons/md";
import ThemeButton from "../items/Button/ThemeButton";
import { LocaleConsumer } from "../contexts/LocaleContext";
import PropTypes from "prop-types";

const NoteHeader = ({ logout, authedUser }) => {
  if (authedUser === null) {
    return (
      <LocaleConsumer>
        {({ locale, toggleLocale }) => {
          return (
            <header>
              <h1>
                <Link to="/">
                  {locale === "id" ? "Catatan Pribadi" : "Personal Notes"}
                </Link>
              </h1>
              <Navbar authedUser={authedUser} />
              <button className="toggle-locale" onClick={toggleLocale}>
                <MdOutlineGTranslate />
              </button>
              <ThemeButton />
            </header>
          );
        }}
      </LocaleConsumer>
    );
  }
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <header>
            <h1>
              <Link to="/">
                {locale === "id" ? "Catatan Pribadi" : "Personal Notes"}
              </Link>
            </h1>
            <Navbar />
            <button className="toggle-locale" onClick={toggleLocale}>
              <MdOutlineGTranslate />
            </button>
            <ThemeButton />
            <button className="button-logout" onClick={logout}>
              <MdLogout />
              {authedUser.name}
            </button>
          </header>
        );
      }}
    </LocaleConsumer>
  );
};

NoteHeader.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func,
};
export default NoteHeader;
