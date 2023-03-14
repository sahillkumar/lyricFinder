export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_SONG":
      return {
        ...state,
        trackList: action?.payload,
        heading: "Search Results",
      };
    case "GET_TOP":
      return {
        ...state,
        trackList: action?.payload,
        heading: "Top 10 Tracks",
      };
    default:
      return state;
  }
};
