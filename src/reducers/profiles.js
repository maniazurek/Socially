import { createSlice } from "@reduxjs/toolkit";
import { BASE_API_URL } from "../utils/commons";

const profiles = createSlice({
  name: "profiles",
  initialState: {
    list: [],
  },
  reducers: {
    setUsers: (store, action) => {
      store.list = action.payload;
    },
  },
});

export default profiles;

export const getUsers = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`${BASE_API_URL}/users`, options)
      .then((res) => res.json())
      .then((data) => dispatch(profiles.actions.setUsers(data.response)));
  };
};
