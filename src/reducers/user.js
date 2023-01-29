import { createSlice } from "@reduxjs/toolkit";
import { batch } from "react-redux";

import { BASE_API_URL } from "../utils/commons";

const user = createSlice({
  name: "user",
  initialState: {
    login: "",
    userId: "",
    accessToken: "",
    userName: "",
    userAvatar: "",
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
    setUserName: (store, action) => {
      store.userName = action.payload;
    },
    setUserAvatar: (store, action) => {
      store.userAvatar = action.payload;
    },
    setLogOut: (store, action) => {
      store.login = "";
      store.userId = "";
      store.accessToken = "";
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
    fetch(`${BASE_API_URL}/signin`, options)
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
    fetch(`${BASE_API_URL}/signup`, options)
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

export const getUserData = () => {
  return (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
    };
    fetch(`${BASE_API_URL}/user`, options)
      .then((res) => res.json())
      .then((data) => {
        batch(() => {
          dispatch(user.actions.setUserName(data.response.name));
          dispatch(user.actions.setUserAvatar(data.response.image));
        });
      });
  };
};

export const putUserName = (name) => {
  return (dispatch, getState) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getState().user.accessToken,
      },
      body: JSON.stringify({
        name,
      }),
    };
    fetch(`${BASE_API_URL}/user`, options)
      .then((res) => res.json())
      .then((data) => dispatch(user.actions.setUserName(data.response.name)));
  };
};

export const putUserAvatar = (image) => {
  return (dispatch, getState) => {
    const formData = new FormData();
    formData.append("image", image);
    const options = {
      method: "PUT",
      headers: {
        Authorization: getState().user.accessToken,
      },
      body: formData,
    };
    fetch(`${BASE_API_URL}/user`, options)
      .then((res) => res.json())
      .then((data) =>
        dispatch(user.actions.setUserAvatar(data.response.image))
      );
  };
};
