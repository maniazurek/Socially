import { createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../utils/commons";

const conversations = createSlice({
  name: "conversations",
  initialState: {
    list: [],
  },
  reducers: {
    setConversations: (store, action) => {
      store.list = action.payload;
    },
    setConversation: (store, action) => {
      store.list = [...store.list, action.payload];
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
    fetch(`${BASE_API_URL}/conversations`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(conversations.actions.setConversations(data.response))
      );
  };
};

export const sendMessageFromProfile = (userId, navigate) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
    };
    fetch(`${BASE_API_URL}/conversation/${userId}`, options)
      .then((res) => res.json())
      .then((data) => {
        if (
          getState().conversations.list.find(
            (conversation) => conversation._id === data.response[0]._id
          )
        ) {
          return navigate(`/conversations/${data.response[0]._id}`);
        } else {
          dispatch(conversations.actions.setConversation(data.response[0]));
          navigate(`/conversations/${data.response[0]._id}`);
        }
      });
  };
};
