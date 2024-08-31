import React from "react";
import "./index.css";

const NotFound = ({ header, description }) => {
  return (
    <div className="errorWrapper">
      <div className="errorContent">
        <h1 className="errorTitle">No {header} Found &#128546;</h1>
        <p className="errorDesc">
          {description}
          <br />
          Try searching for different song.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
