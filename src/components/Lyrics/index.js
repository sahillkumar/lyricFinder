import React, { useCallback, useEffect, useState } from "react";
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

  const fetchCurrentTrack = useCallback(
    async (trackId) => {
      try {
        const response = await fetchTrack(trackId);
        dispatch({
          type: ACTION_TYPES.fetchTrack,
          payload: { [id]: response?.data?.message?.body?.track },
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    [id, dispatch]
  );

  const fetchLyricsCurrentSong = useCallback(
    async (trackId) => {
      try {
        const response = await fetchLyrics(trackId);
        dispatch({
          type: ACTION_TYPES.fetchLyrics,
          payload: { [id]: response?.data?.message?.body?.lyrics },
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    [dispatch, id]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetchCurrentTrack(id);
      fetchLyricsCurrentSong(id);
    }
  }, [fetchCurrentTrack, fetchLyricsCurrentSong, id]);

  useEffect(() => {
    if (currentTrack?.[id] && currentLyrics?.[id]) {
      setTrack(currentTrack?.[id]);
      setLyrics(currentLyrics?.[id]);
      setLoading(false);
    } else if (currentTrack?.[id] && !currentLyrics?.[id]) {
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
            {lyrics?.lyrics_body ? (
              <>
                <div className="lyricsInfo">
                  <div
                    className="lyricsTrackName ellipsis"
                    title={track?.track_name}
                  >
                    {track?.track_name}
                  </div>
                  <div className="lyricsArtist ellipsis">
                    {track?.artist_name && `- ${track?.artist_name}`}
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
            ) : (
              <div
                className="emptyWrapper"
                style={{
                  border: "none",
                }}
              >
                No Lyrics Found &#128546;
                <br />
                Sorry, we coudn't get the lyrics of the song you were looking
                for. <br />
                Try searching for different song.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(Lyrics);
