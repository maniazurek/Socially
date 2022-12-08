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
      navigate("/main");
    }
  }, [userLogin]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(user.actions.logIn(logInForm));
  };

  return (
    <>
      <div>Welcome to</div>
      <h2>Socially</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Login"
          value={logInForm}
          onChange={(event) => setLogInForm(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordForm}
          onChange={(event) => setPasswordForm(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>Or sign up</p>
    </>
  );
};

export default SignIn;
