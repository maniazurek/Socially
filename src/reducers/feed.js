import { createSlice } from "@reduxjs/toolkit";

const feed = createSlice({
  name: "feed",
  initialState: {
    list: [],
    // like: null,
  },
  reducers: {
    setFeed: (store, action) => {
      store.list = action.payload;
    },
    // setLike: (store, action) => {
    //   store.like = action.payload
    // }
  },
});

export default feed;

export const getFeed = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`https://socially-api.fly.dev/feed`, options)
      .then((res) => res.json())
      .then((data) => dispatch(feed.actions.setFeed(data.response)));
  };
};

// export const putLike = (accessToken, feedId) => {
//   return (dispatch, getState) => {
//     const options = {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: accessToken,
//       },
//     };
//     fetch(`https://socially-api.onrender.com/feed/likes/${feedId}`, options)
//       .then((res) => res.json())
//       .then((data) => dispatch(feed.actions.setLike(data.response)));
//   };
// };
