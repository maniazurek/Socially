import { createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../utils/commons";

const feed = createSlice({
  name: "feed",
  initialState: {
    list: [],
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
    fetch(`${BASE_API_URL}/feed`, options)
      .then((res) => res.json())
      .then((data) => dispatch(feed.actions.setFeed(data.response)));
  };
};

export const postFeed = (image, navigate) => {
  return (dispatch, getState) => {
    const formData = new FormData();
    formData.append("image", image);
    const options = {
      method: "POST",
      headers: {
        Authorization: getState().user.accessToken,
      },
      body: formData,
    };
    fetch(`${BASE_API_URL}/feed`, options)
      .then((res) => res.json())
      .then((data) => navigate(`/users/${data.response.user._id}`));
  };
};
