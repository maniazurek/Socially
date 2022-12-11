import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Feed from "./Feed";
import Messages from "./Messages";
import People from "./People";
import MyProfile from "./MyProfile";
import AddPost from "./AddPost";
import SingleMessage from "./SingleMessage";
import SingleProfile from "./SingleProfile";

import {
  Home,
  ChatBubbleOutline,
  AddCircleOutline,
  GroupsOutlined,
  AccountCircle,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { Link, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainButton from "../styled-components/MainButton";

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onPreviousPage = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const onLogOut = () => {
    navigate("/signin");
    window.scrollTo(0, 0);
  };

  const generateIconColor = (icon) => {
    if (location.pathname === "/" && icon === "feed") {
      return "#7DB9B3";
    } else if (location.pathname === "/messages" && icon === "messages") {
      return "#7DB9B3";
    } else if (location.pathname === "/people" && icon === "people") {
      return "#7DB9B3";
    } else if (location.pathname === "/addpost" && icon === "addpost") {
      return "#7DB9B3";
    } else if (location.pathname === "/myprofile" && icon === "myprofile") {
      return "#7DB9B3";
    } else {
      return "#000";
    }
  };

  const generateHeader = () => {
    if (location.pathname === "/messages/:userId") {
      return "custom_header";
    } else {
      return "header";
    }
  };

  return (
    <>
      <header className={generateHeader()}>
        <div className="header_element-back" onClick={onPreviousPage}></div>
        <h2 className="header_element-logo">Socially</h2>
        <div className="header_element-logout" onClick={onLogOut}></div>
      </header>
      <Routes>
        <Route index element={<Feed />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:userId" element={<SingleMessage />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="people" element={<People />} />
        <Route path="people/:userId" element={<SingleProfile />} />
        <Route path="myprofile" element={<MyProfile />} />
      </Routes>

      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: "20px",
        }}
        elevation={5}
      >
        <Outlet />
        <BottomNavigation>
          <BottomNavigationAction
            to="/"
            component={Link}
            icon={<Home htmlColor={generateIconColor("feed")} />}
          />
          <BottomNavigationAction
            to="/messages"
            component={Link}
            icon={
              <ChatBubbleOutline htmlColor={generateIconColor("messages")} />
            }
          />
          <BottomNavigationAction
            to="/addpost"
            component={Link}
            icon={<AddCircleOutline htmlColor={generateIconColor("addpost")} />}
          />
          <BottomNavigationAction
            to="/people"
            component={Link}
            icon={<GroupsOutlined htmlColor={generateIconColor("people")} />}
          />
          <BottomNavigationAction
            to="/myprofile"
            component={Link}
            icon={<AccountCircle htmlColor={generateIconColor("myprofile")} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Main;
