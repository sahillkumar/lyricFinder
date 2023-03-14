import React from "react";
import { fetchSearchResults } from "../../apis";
import { useLyricFinder } from "../../state/context";

const Search = () => {
  const { dispatch } = useLyricFinder();
  console.info("here");

  const handleChange = async ({ target: { value } }) => {
    const response = await fetchSearchResults(value);
    const trackList = response?.data?.message?.body?.track_list ?? [];
    dispatch({
      type: "SEARCH_SONG",
      payload: trackList,
    });
  };

  return (
    <div style={{ padding: 60, textAlign: "center" }}>
      <div style={{ margin: "auto" }}>
        <input
          type="search"
          className="inputSearch"
          placeholder="Search here..."
          onChange={handleChange}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
