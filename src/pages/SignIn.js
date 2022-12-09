import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import user from "../reducers/user";

const SignIn = () => {
  const [logInForm, setLogInForm] = useState("");
  const [passwordForm, setPasswordForm] = useState("");
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
          <div className="container_form-button__container">
            <button className="container_form-button" type="submit">
              Register
            </button>
          </div>
          <p className="container_paragraph">Or sign up</p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
