import React from "react";
import { useLyricFinder } from "../../state/context";
import Track from "./Track";
import TrackSkeleton from "./TrackSkeleton";
import "./index.css";
import NotFound from "../NotFound";

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
        {trackList?.length === 0 && searchStatus !== undefined ? (
          <NotFound />
        ) : trackList?.length ? (
          <div className="trackCardWrapper">
            {trackList.map((track) => (
              <Track key={track.track.track_id} track={track} />
            ))}
          </div>
        ) : (
          <div className="trackCardWrapper">
            <>{getSkeleton()}</>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tracks;
