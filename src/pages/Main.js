import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Feed from "./Feed";
import Messages from "./Messages";
import People from "./People";
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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import user from "../reducers/user";

const Main = () => {
  const userId = useSelector((store) => store.user.userId);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const accessToken = useSelector((store) => store.user.accessToken);

  useEffect(() => {
    if (!accessToken) {
      navigate("/sign");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const onPreviousPage = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  const onLogOut = () => {
    navigate("/sign");
    window.scrollTo(0, 0);
    dispatch(user.actions.setLogOut())
  };

  const generateIconColor = (icon) => {
    if (location.pathname === "/" && icon === "feed") {
      return "#7DB9B3";
    } else if (location.pathname === "/conversations" && icon === "conversations") {
      return "#7DB9B3";
    } else if (location.pathname === "/people" && icon === "people") {
      return "#7DB9B3";
    } else if (location.pathname === "/addpost" && icon === "addpost") {
      return "#7DB9B3";
    } else if (location.pathname === "/profile" && icon === "profile") {
      return "#7DB9B3";
    } else {
      return "#000";
    }
  };

  const generateHeader = () => {
    if (location.pathname === "/conversations/:userId") {
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
        <Route path="conversations" element={<Messages />} />
        <Route
          path="conversations/:conversationId"
          element={<SingleMessage />}
        />
        <Route path="addpost" element={<AddPost />} />
        <Route path="people" element={<People />} />
        <Route path="people/:userId" element={<SingleProfile />} />
        {/* <Route path="profile" element={<Profile />} /> */}
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
            to="/conversations"
            component={Link}
            icon={
              <ChatBubbleOutline htmlColor={generateIconColor("conversations")} />
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
            to={`/people/${userId}`}
            component={Link}
            icon={<AccountCircle htmlColor={generateIconColor("profile")} />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default Main;
