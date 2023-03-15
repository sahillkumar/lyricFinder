import React from "react";

function TrackSkeleton() {
  return (
    <div className="trackCard">
      <div className="trackName skeleton">Song Name</div>
      <div className="trackArtist skeleton"> Artist</div>
      <div className="trackAlbum skeleton">Album</div>
      <div className="lyricsButtonWrapper">
        <button className="lyricsButton skeleton">See Lyrics</button>
      </div>
    </div>
  );
}

export default TrackSkeleton;
