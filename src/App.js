import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default App;
