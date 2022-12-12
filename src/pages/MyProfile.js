import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../reducers/user";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useParams } from "react-router";

const MyProfile = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const user = useSelector((store) => store.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData(accessToken));
    }
  }, [accessToken]);

  const onMessage = () => {
    navigate("/messages");
  };

  return (
    <>
      <div className="container_layout">
        <div className="container_profile-info">
          <div className="container_profile-img">
            <div className="container_profile-img__border">
              <div
                className="container_profile-img__picture"
                style={{ backgroundImage: `url(${user.image})` }}
              ></div>
            </div>
          </div>
          <h4 className="profile_heading">{user.name}</h4>
          <p className="profile_nick">@{user.login}</p>
          <button className="profile_message" onClick={onMessage}>
            Message
          </button>
        </div>
        <div className="profile_content">
          <div className="profile_content-info">
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Post</p>
              <p className="profile_content-counter">30</p>
            </div>
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Followers</p>
              <p className="profile_content-counter">{user.followers.length}</p>
            </div>
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Follows</p>
              <p className="profile_content-counter">{user.follows.length}</p>
            </div>
          </div>
          <div className="profile_content-posts">
            <div className="profile_content-post"></div>
            <div className="profile_content-post"></div>
            <div className="profile_content-post"></div>
            <div className="profile_content-post"></div>
            <div className="profile_content-post"></div>
            <div className="profile_content-post"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
