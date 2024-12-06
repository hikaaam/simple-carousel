import { useEffect, useState } from "react";
import { iGetSongResponse } from "./interface";
import { metalSong, popSong, rockSong } from "../../shared/constant/songs";

//fake API call
export const useGetSongList = () => {
  const [state, setState] = useState({
    isLoading: true,
    isFetching: true,
  });
  const [data, setData] = useState<iGetSongResponse>();
  const refetch = () => {
    setState({
      ...state,
      isFetching: true,
    });
    setTimeout(() => {
      setState({
        ...state,
        isFetching: false,
      });
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          title: "Top Metal Songs",
          list: metalSong,
        },
        {
          title: "Top Rock Songs",
          list: rockSong,
        },
        {
          list: popSong,
          title: "Top Pop Songs",
        },
      ]);
      setState({
        isFetching: false,
        isLoading: false,
      });
    }, 2000);
  }, []);

  return {
    isLoading: state.isLoading,
    isFetching: state.isFetching,
    data,
    refetch,
  };
};
