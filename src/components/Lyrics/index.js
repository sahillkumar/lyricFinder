import React, { useEffect, useState } from "react";
import { useLocation, withRouter } from "react-router-dom";
import { useLyricFinder } from "../../state/context";
import { fetchLyrics, fetchTrack } from "../../apis";
import { ACTION_TYPES } from "../../constants";
import MusixMatchImg from "../../assets/images/musixmatch.svg";
import { removeCopyRightText } from "../../utils";
import LyricSkeleton from "./LyricSkeleton";
import "./index.css";

const Lyrics = ({
  match: {
    params: { id },
  },
}) => {
  const { currentTrack, lyrics: currentLyrics, dispatch } = useLyricFinder();

  const [lyrics, setLyrics] = useState();
  const [track, setTrack] = useState();
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  const fetchCurrentTrack = async (trackId) => {
    try {
      const response = await fetchTrack(trackId);
      dispatch({
        type: ACTION_TYPES.fetchTrack,
        payload: { [id]: response?.data?.message?.body?.track },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchLyricsCurrentSong = async (trackId) => {
    try {
      const response = await fetchLyrics(trackId);
      dispatch({
        type: ACTION_TYPES.fetchLyrics,
        payload: { [id]: response?.data?.message?.body?.lyrics },
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchCurrentTrack(id);
      fetchLyricsCurrentSong(id);
    }
  }, [id]);

  useEffect(() => {
    if (currentTrack?.[id] && currentLyrics?.[id]) {
      setTrack(currentTrack?.[id]);
      setLyrics(currentLyrics?.[id]);
      setLoading(false);
    }
  }, [currentTrack, currentLyrics, id]);

  return (
    <div className="lyricsContainer">
      <div className="lyricsWrapper">
        {loading ? (
          <LyricSkeleton />
        ) : (
          <>
            <div className="lyricsInfo">
              <div
                className="lyricsTrackName ellipsis"
                title={track?.track_name}
              >
                {track?.track_name}
              </div>
              <div className="lyricsArtist ellipsis">
                - {track?.artist_name}
              </div>
            </div>
            <div className="lyrics">
              {removeCopyRightText(lyrics?.lyrics_body)}
            </div>
            <div className="copyRight">
              Lyrics Powered By
              <div className="copyRightLogoWrapper">
                <img
                  src={MusixMatchImg}
                  alt="musixmatch"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(Lyrics);
