import React from "react";
import { Link } from "react-router-dom";
import { BiArchive, BiHomeAlt } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="navigation">
      <ul>
        <li className="nav-icon">
          <Link to="/">
            <BiHomeAlt />
          </Link>
          <Link to="/archives">
            <BiArchive />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
