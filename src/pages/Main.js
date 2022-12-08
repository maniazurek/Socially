import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Feed from "../components/Feed";
import Messages from "../components/Messages";
import People from "../components/People";
import Profile from "../components/Profile";

const Main = () => {
  return (
    <>
      <Feed />
      <Messages />
      <People />
      <Profile />
      <BottomNavigation></BottomNavigation>
    </>
  );
};

export default Main;
