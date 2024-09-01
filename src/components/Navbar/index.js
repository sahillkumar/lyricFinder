import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logoWrapper">
        <Link to="/">
          <div className="logo"> LF</div>
        </Link>
        <div className="logoNameWrapper">
          <div className="logoName">Lyrics Finder </div>
          <div className="logoTagline">find the story behind every song</div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
