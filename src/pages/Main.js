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
import { useNavigate } from "react-router";

const Main = () => {
  const navigate = useNavigate();

  const onPreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      <header className="header">
        <div className="header_element-back" onClick={onPreviousPage}></div>
        <h2 className="header_element-logo">Socially</h2>
        <div className="header_element-logout"></div>
      </header>
      {/* <Feed /> */}
      <Messages />
      {/* <People />
      <Profile /> */}
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
