export const SEARCH_URL = `https://api.musixmatch.com/ws/1.1/track.search?q_track=$QUERY&page_size=10&page=1&s_track_rating=desc&apikey=$API_KEY`;

export const TOP_TEN_SONGS_URL =
  "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=$API_KEY";

export const FETCH_LYRICS_URL = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=$TRACK_ID&apikey=$API_KEY`;

export const FETCH_TRACK_URL = `https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=$TRACK_ID&apikey=$API_KEY`;

export const API_KEY = "46a908cae9e6fe663a1fe8ef339f08f6";

export const ACTION_TYPES = {
  getTop: "GET_TOP",
  searchSong: "SEARCH_SONG",
  fetchTrack: "FETCH_TRACK",
  fetchLyrics: "FETCH_LYRICS",
};

export const UP = "up";
export const DOWN = "down";

export const HEROKU_PROXY_URL = "https://cors-anywhere.herokuapp.com/";
