import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Feed from "../components/Feed";
import Messages from "../components/Messages";
import People from "../components/People";
import MyProfile from "../components/MyProfile";
import AddPost from "../components/AddPost";
import SingleMessage from "../components/SingleMessage";
import SingleProfile from "../components/SingleProfile";

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

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onPreviousPage = () => {
    navigate(-1);
  };

  const onLogOut = () => {
    navigate("/signin");
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
        <Route path="/" element={<Feed />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:userId" element={<SingleMessage />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:userId" element={<SingleProfile />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={5}
      >
        <Outlet />
        <BottomNavigation>
          <BottomNavigationAction
            label="Feed"
            icon={<Home htmlColor={generateIconColor("feed")} />}
            to="/"
            component={Link}
          />
          <BottomNavigationAction
            label="Messages"
            icon={
              <ChatBubbleOutline htmlColor={generateIconColor("messages")} />
            }
            to="/messages"
            component={Link}
          />
          <BottomNavigationAction
            label="AddPost"
            icon={<AddCircleOutline htmlColor={generateIconColor("addpost")} />}
            to="/addpost"
            component={Link}
          />
          <BottomNavigationAction
            label="People"
            icon={<GroupsOutlined htmlColor={generateIconColor("people")} />}
            to="/people"
            component={Link}
          />
          <BottomNavigationAction
            label="MyProfile"
            icon={<AccountCircle htmlColor={generateIconColor("myprofile")} />}
            to="/myprofile"
            component={Link}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Main;
