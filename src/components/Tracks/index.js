import React from "react";
import { useLyricFinder } from "../../state/context";
import Track from "./Track";
import TrackSkeleton from "./TrackSkeleton";
import "./index.css";

const getSkeleton = () => {
  let ar = [];
  for (let index = 0; index < 10; index++) {
    ar.push(<TrackSkeleton key={`trackCard-${index}`} />);
  }
  return ar;
};

const Tracks = () => {
  const { trackList, heading } = useLyricFinder();

  return (
    <div>
      <div>
        <h1 className="header">{heading}</h1>
        <div className="trackCardWrapper">
          {trackList?.length ? (
            <>
              {trackList.map((track) => (
                <Track key={track.track.track_id} track={track} />
              ))}
            </>
          ) : (
            <>{getSkeleton()}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
