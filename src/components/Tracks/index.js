import React from "react";
import { useLyricFinder } from "../../state/context";
import Track from "./Track";

const Tracks = () => {
  const { trackList, heading, setReload, reload } = useLyricFinder();
  if (trackList.length > 0) {
    return (
      <>
        <h3 className="text-center mb-3">{heading}</h3>
        {heading === "Top 10 Tracks" ? (
          ""
        ) : (
          <div className="d-grid col-md-2 mx-auto mb-4 px-2">
            <div className="btn btn-dark" onClick={() => setReload(!reload)}>
              Get Top 10 Tracks
            </div>
          </div>
        )}
        <div className="row d-flex justify-content-center">
          {trackList.map((track) => (
            <Track key={track.track.track_id} track={track} />
          ))}
        </div>
      </>
    );
  } else {
    return <>none</>;
  }
};

export default Tracks;
