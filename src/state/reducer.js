import { ACTION_TYPES } from "../constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.searchSong:
      return {
        ...state,
        trackList: action?.payload,
        heading: "Search Results",
      };
    case ACTION_TYPES.getTop:
      return {
        ...state,
        trackList: action?.payload,
        heading: "Top 10 Trending Songs In India",
      };
    case ACTION_TYPES.fetchTrack:
      return {
        ...state,
        currentTrack: action?.payload,
      };
    case ACTION_TYPES.fetchLyrics:
      return {
        ...state,
        lyrics: action?.payload,
      };
    default:
      return state;
  }
};
