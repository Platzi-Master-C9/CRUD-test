import "./Header.css";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import React from "react";
import Nav from "../Nav";

const Header = () => {
  return (
    <React.Fragment>
      <header className="container">
        <p>UsBlog</p>
        <button className="sun">
          <FaRegSun />
        </button>
        <button className="moon">
          <FaRegMoon />
        </button>
      </header>
      <Nav />
    </React.Fragment>
  );
};

export default Header;
