import React from "react";
import logo from "../assets/images/book-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
    </header>
  );
};

export default Header;
