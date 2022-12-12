import { createSlice } from "@reduxjs/toolkit";

const conversations = createSlice({
  name: "conversations",
  initialState: {
    list: [],
  },
  reducers: {
    setConversations: (store, action) => {
      store.list = action.payload;
    },
  },
});

export default conversations;

export const getConversations = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`https://socially-api.onrender.com/conversations`, options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
};

// dispatch(conversations.actions.setConversations(data.response))
