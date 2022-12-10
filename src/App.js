import React from "react";
import { Routes, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import Welcome from "./components/Welcome";
import Error from "./components/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="*" element={<Main />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};

export default App;
