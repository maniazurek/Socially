import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MainButton from "../styled-components/MainButton";

import { userLogin, userRegister } from "../reducers/user";

const Sign = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("signin");

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (mode === "signin") {
      dispatch(userLogin(login, password));
    } else {
      dispatch(userRegister(login, password));
    }
  };

  return (
    <>
      <div className="background_rectangle"></div>
      <div className="background_border"></div>
      <div className="container_form">
        <p className="container_paragraph">Welcome to</p>
        <h2 className="container_title">Socially</h2>
        <form onSubmit={onFormSubmit} className="container_data">
          <input
            className="container_form-element"
            type="text"
            placeholder="Login"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />
          <input
            className="container_form-element"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {mode === "signup" ? (
            <div className="sign_container">
              <MainButton type="submit">
                <span>Register</span>
              </MainButton>
              <button
                onClick={() => setMode("signin")}
                className="sign_change-mode"
              >
                Or sign in
              </button>
            </div>
          ) : (
            <div className="sign_container">
              <MainButton type="submit">
                <span>Login</span>
              </MainButton>
              <button
                onClick={() => setMode("signup")}
                className="sign_change-mode"
              >
                Or sign up
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Sign;
