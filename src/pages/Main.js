import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Feed from "../components/Feed";
import Messages from "../components/Messages";
import People from "../components/People";
import Profile from "../components/Profile";
import {
  Home,
  ChatBubbleOutline,
  AddCircleOutline,
  GroupsOutlined,
  AccountCircle,
} from "@mui/icons-material";
import { Paper } from "@mui/material";

const Main = () => {
  return (
    <>
      <Feed />
      <Messages />
      <People />
      <Profile />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={5}
      >
        <BottomNavigation>
          <BottomNavigationAction label="Feed" icon={<Home />} />
          <BottomNavigationAction
            label="Messages"
            icon={<ChatBubbleOutline />}
          />
          <BottomNavigationAction label="AddPost" icon={<AddCircleOutline />} />
          <BottomNavigationAction label="People" icon={<GroupsOutlined />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircle />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Main;
