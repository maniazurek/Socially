import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { BASE_API_URL } from "../utils/commons";

const user = createSlice({
  name: "user",
  initialState: {
    login: "",
    userId: "",
    accessToken: "",
    userData: {},
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
    setUserData: (store, action) => {
      store.userData = action.payload;
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
    fetch(`https://socially-api.fly.dev/signin`, options)
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
    fetch(`https://socially-api.fly.dev/signup`, options)
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

export const getUserData = (accessToken) => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    };
    fetch(`https://socially-api.fly.dev/user`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(user.actions.setUserData(data.response))
      );
  };
};
