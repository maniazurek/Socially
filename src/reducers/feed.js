import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
  name: "feed",
  initialState: {
    list: [],
  },
  reducers: {
    fetchFeed: (store, action) => {
      store.list = action.payload;
    },
  },
});

export default feed;

export const getFeed = () => {
  return (dispatch, getState) => {
    fetch("https://socially-api.onrender.com/feed")
      .then((res) => res.json())
      .then((data) => dispatch(feed.actions.fetchFeed(data)));
  };
};
