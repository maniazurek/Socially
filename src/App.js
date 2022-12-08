import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default App;
