import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Sign from "./pages/Sign";
import Main from "./pages/Main";
import Welcome from "./pages/Welcome";
import Error from "./pages/Error";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/signin" element={<Sign />} />
      <Route path="/404" element={<Error />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default App;
