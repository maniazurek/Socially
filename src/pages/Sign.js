import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MainButton from "../styled-components/MainButton";

import user from "../reducers/user";
import Main from "./Main";

const Sign = () => {
  const [logInForm, setLogInForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
  const [mode, setMode] = useState("signin");
  const userLogin = useSelector((store) => store.user.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLogin) {
      navigate("/");
    }
  }, [userLogin]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(user.actions.logIn(logInForm));
  };

  const signChange = () => {
    setMode("signup");
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
            value={logInForm}
            onChange={(event) => setLogInForm(event.target.value)}
          />
          <input
            className="container_form-element"
            type="password"
            placeholder="Password"
            value={passwordForm}
            onChange={(event) => setPasswordForm(event.target.value)}
          />
          {mode === "signup" ? (
            <div className="sign_container">
              <MainButton type="submit">
                <span>Register</span>
              </MainButton>
              <button onClick={() => setMode("signin")} className="sign_change-mode">
                Or sign in
              </button>
            </div>
          ) : (
            <div className="sign_container">
              <MainButton type="submit">
                <span>Login</span>
              </MainButton>
              <button onClick={() => setMode("signup")} className="sign_change-mode">Or sign up</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Sign;
