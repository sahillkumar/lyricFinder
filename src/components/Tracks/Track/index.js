import React from "react";
import { Link } from "react-router-dom";

function Track({ track: { track } }) {
  const { artist_name, track_name, album_name, commontrack_id } = track;

  return (
    <div className="trackCard">
      <div className="trackName ellipsis" title={track_name}>
        {track_name}
      </div>
      <div className="trackArtist ellipsis">
        <span className="material-symbols-outlined">person</span>
        <span title={artist_name}>{artist_name}</span>
      </div>
      <div className="trackAlbum ellipsis">
        <span className="material-symbols-outlined">album</span>
        <span title={album_name}>{album_name}</span>
      </div>
      <div className="lyricsButtonWrapper">
        <Link to={`/track/lyrics/${commontrack_id}`}>
          <button className="lyricsButton">See Lyrics</button>
        </Link>
      </div>
    </div>
  );
}

export default Track;
