import axios from "axios";
import {
  API_KEY,
  FETCH_LYRICS_URL,
  FETCH_TRACK_URL,
  HEROKU_PROXY_URL,
  SEARCH_URL,
  TOP_TEN_SONGS_URL,
} from "../constants";

export const fetchTopTenTracks = () => {
  const URL = TOP_TEN_SONGS_URL.replace("$API_KEY", API_KEY);
  return axios
    .get(`${HEROKU_PROXY_URL}${URL}`)
    .then((response) => response)
    .catch((err) => err);
};

export const fetchSearchResults = (query) => {
  const URL = SEARCH_URL.replace("$QUERY", query).replace("$API_KEY", API_KEY);
  return axios
    .get(`${HEROKU_PROXY_URL}${URL}`)
    .then((response) => response)
    .catch((err) => err);
};

export const fetchLyrics = (trackId) => {
  const URL = FETCH_LYRICS_URL.replace("$TRACK_ID", trackId).replace(
    "$API_KEY",
    API_KEY
  );
  return axios
    .get(`${HEROKU_PROXY_URL}${URL}`)
    .then((response) => response)
    .catch((err) => err);
};

export const fetchTrack = (trackId) => {
  const URL = FETCH_TRACK_URL.replace("$TRACK_ID", trackId).replace(
    "$API_KEY",
    API_KEY
  );
  return axios
    .get(`${HEROKU_PROXY_URL}${URL}`)
    .then((response) => response)
    .catch((err) => err);
};
