import React, { useReducer, useState, useContext, useEffect } from "react";
import { fetchTopTenTracks } from "../apis";
import { reducer } from "./reducer";

export const LyricFinderContext = React.createContext();
LyricFinderContext.displayName = "LyricFinderContext";

export const LyricFinderContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    trackList: [],
    heading: "Top 10 Tracks",
  });

  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [reload]);

  return (
    <LyricFinderContext.Provider
      value={{ ...state, dispatch, reload, setReload }}
      {...props}
    />
  );
};

export const useLyricFinder = () => {
  const context = useContext(LyricFinderContext);
  if (!context) {
    throw new Error(
      "useLyricFinder should be used within <LyricFinderContextProvider />"
    );
  }
  return context;
};
