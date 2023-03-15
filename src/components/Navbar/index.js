import React from "react";
import { DOWN } from "../../constants";
import useScrollDirection from "../../hooks/useScrollDirection";
import "./index.css";

function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <div className={`navbar ${scrollDirection === DOWN ? "hide" : ""}`}>
      <div className="logoWrapper">
        <div className="logo">LF</div>
        <div className="logoNameWrapper">
          <div className="logoName">Lyrics Finder </div>
          <div className="logoTagline">find the story behind every song</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
