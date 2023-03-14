import React from "react";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        position: "fixed",
        width: "100%",
        height: 50,
        color: "white",
        zIndex: 2,
        textAlign: "center",
      }}
    >
      <span>
        LyricFinder <span> : find lyrics of your favourite song </span>
      </span>
    </div>
  );
}

export default Navbar;
