import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import user from "../reducers/user";

const SignIn = () => {
  const [logInForm, setLogInForm] = useState("");
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
      <div>Sign In</div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Type your login..."
          value={logInForm}
          onChange={(event) => setLogInForm(event.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default SignIn;
