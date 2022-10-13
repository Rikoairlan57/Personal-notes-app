import React from "react";
import { ThemeConsumer } from "../../contexts/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";

const ThemeButton = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button className="toggle-theme" onClick={toggleTheme}>
            {theme === "light" ? <MdOutlineDarkMode /> : <BsSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
};

export default ThemeButton;
