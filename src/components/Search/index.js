import React from "react";
import { fetchSearchResults, fetchTopTenTracks } from "../../apis";
import { useLyricFinder } from "../../state/context";
import { debounce } from "../../utils";
import "./index.css";

const Search = () => {
  const { dispatch } = useLyricFinder();
  const getSearchResults = async (value) => {
    try {
      const response = await fetchSearchResults(value);
      dispatch({
        type: "SEARCH_STATUS",
        payload: response?.status ?? 500,
      });
      const trackList = response?.data?.message?.body?.track_list ?? [];
      dispatch({
        type: "SEARCH_SONG",
        payload: trackList,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const getTopTen = async () => {
    try {
      const response = await fetchTopTenTracks();
      dispatch({
        type: "GET_TOP",
        payload: response?.data?.message?.body?.track_list ?? [],
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = async ({ target: { value } }) => {
    dispatch({
      type: "SEARCH_STATUS",
      payload: undefined,
    });
    if (!value || !value?.length) {
      getTopTen();
    } else {
      getSearchResults(value);
    }
  };

  const handleChangeDebounced = debounce((e) => {
    dispatch({
      type: "SEARCH_SONG",
      payload: [],
    });
    handleChange(e);
  });

  return (
    <div className="searchWrapper">
      <div className="searchBox">
        <input
          type="search"
          className="inputSearch"
          placeholder="Search for your favourite song, artist, album..."
          onChange={handleChangeDebounced}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Search;
