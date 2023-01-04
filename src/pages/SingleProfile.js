import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../reducers/user";
import { putUserName, putUserAvatar } from "../reducers/user";
import { useNavigate, useParams } from "react-router";
import { BASE_API_URL } from "../utils/commons";
import { sendMessageFromProfile } from "../reducers/conversations";

const SingleProfile = () => {
  const [user, setUser] = useState({});
  const accessToken = useSelector((store) => store.user.accessToken);
  const loggedInUser = useSelector((store) => store.user.userId);

  const { userId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUserData());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (userId) {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
      };
      fetch(`https://socially-api.fly.dev/user/${userId}`, options)
        .then((res) => res.json())
        .then((data) => setUser(data.response));
    }
  }, [userId, accessToken]);

  const onNameChange = (event) => {
    dispatch(putUserName(event.target.value));
    setUser({
      ...user,
      name: event.target.value,
    });
  };

  const onAvatarChange = (event) => {
    dispatch(putUserAvatar(event.target.files[0]));
    setUser({
      ...user,
      image: URL.createObjectURL(event.target.files[0]),
    });
  };

  const onSendMessage = () => {
    dispatch(sendMessageFromProfile(userId, navigate));
  };

  const isUserLoggedIn = loggedInUser === user._id;

  return (
    <>
      <div className="container_layout">
        <div className="container_profile-info">
          <div className="container_profile-img">
            <div className="container_profile-img__border">
              {isUserLoggedIn ? (
                <label htmlFor="image">
                  <input
                    type="file"
                    onChange={onAvatarChange}
                    accept="image/*"
                    id="image"
                    name="image"
                  />
                  <img
                    src={user.image}
                    className={isUserLoggedIn ? "container_profile-img__picture-loggedIn" : "container_profile-img__picture"}
                  />
                </label>
              ) : (
                <img
                  src={user.image}
                  className="container_profile-img__picture"
                />
              )}
            </div>
          </div>
          {isUserLoggedIn ? (
            <input
              className="profile_heading"
              type="text"
              placeholder="Type your name"
              value={user.name}
              onChange={onNameChange}
            />
          ) : (
            <h4 className="profile_heading">{user.name}</h4>
          )}

          <p className="profile_nick">@{user.login}</p>
          <button
            className={
              isUserLoggedIn ? "profile_message-hidden" : "profile_message"
            }
            onClick={onSendMessage}
          >
            Message
          </button>
        </div>
        <div className="profile_content">
          <div className="profile_content-info">
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Post</p>
              <p className="profile_content-counter">{user.posts.length}</p>
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
          {user.posts.map((img) => (
            <div
              key={img._id}
              className="single-user__photo"
              style={{ backgroundImage: `url(${img.image})` }}
            ></div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProfile;
