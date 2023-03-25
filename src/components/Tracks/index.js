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
  const { trackList, heading, searchStatus } = useLyricFinder();

  return (
    <div>
      <div>
        <div className="header">{heading}</div>
        <div className="trackCardWrapper">
          {trackList?.length === 0 && searchStatus !== undefined ? (
            <div className="empty">
              Sorry, we coudn't get any results for your search. <br />
              Try searching for different song.
            </div>
          ) : trackList?.length ? (
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
