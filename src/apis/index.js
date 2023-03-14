import axios from "axios";
import { API_KEY, SEARCH_URL, TOP_TEN_SONGS_URL } from "../constants";

export const fetchTopTenTracks = () => {
  const URL = TOP_TEN_SONGS_URL.replace("$API_KEY", API_KEY);
  return axios
    .get(URL)
    .then((response) => response)
    .catch((err) => err);
};

export const fetchSearchResults = (query) => {
  const URL = SEARCH_URL.replace("$query", query).replace("$API_KEY", API_KEY);
  axios
    .get(URL)
    .then((response) => response)
    .catch((err) => err);
};
