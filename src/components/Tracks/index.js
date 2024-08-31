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
    <>
      {trackList?.length === 0 && searchStatus !== undefined ? (
        <NotFound
          header="Results"
          description="Sorry, we coudn't get any results for your search."
        />
      ) : trackList?.length ? (
        <>
          <div className="header">{heading}</div>
          <div className="trackCardWrapper">
            {trackList.map((track) => (
              <Track key={track.track.track_id} track={track} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="header">{heading}</div>
          <div className="trackCardWrapper">
            <>{getSkeleton()}</>
          </div>
        </>
      )}
    </>
  );
};

export default Tracks;
