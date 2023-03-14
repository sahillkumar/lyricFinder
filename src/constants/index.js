export const SEARCH_URL = `https://api.musixmatch.com/ws/1.1/track.search?q_track=$query&page_size=10&page=1&s_track_rating=desc&apikey=$API_KEY`;

export const TOP_TEN_SONGS_URL =
  "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=$API_KEY";

export const API_KEY = "46a908cae9e6fe663a1fe8ef339f08f6";
