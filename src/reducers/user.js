import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { BASE_API_URL } from "../utils/commons";

const user = createSlice({
  name: "user",
  initialState: {
    login: "",
    userId: "",
    accessToken: "",
  },
  reducers: {
    setLogin: (store, action) => {
      store.login = action.payload;
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
  },
});

export default user;

export const userLogin = (login, password) => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    };
    fetch(`https://socially-api.onrender.com/signin`, options)
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(user.actions.setLogin(data.response.login));
          dispatch(user.actions.setUserId(data.response.userId));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
        });
      });
  };
};

export const userRegister = (login, password) => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login,
        password,
      }),
    };
    fetch(`https://socially-api.onrender.com/signup`, options)
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(user.actions.setLogin(data.response.login));
          dispatch(user.actions.setUserId(data.response.userId));
          dispatch(user.actions.setAccessToken(data.response.accessToken));
        });
      });
  };
};
