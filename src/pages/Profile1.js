import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../reducers/user";
import { putUserName, putUserAvatar } from "../reducers/user";
import { useNavigate, useParams } from "react-router";
import { BASE_API_URL } from "../utils/commons";

const Profile = () => {
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
      fetch(`${BASE_API_URL}/user/${userId}`, options)
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
    navigate("/messages/userId");
  };

  const isUserLoggedIn = loggedInUser === user._id;

  console.log(user)

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
          <button className="profile_message" onClick={onSendMessage}>
            Message
          </button>
        </div>
        <div className="profile_content">
          <div className="profile_content-info">
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Post</p>
              <p className="profile_content-counter">X</p>
            </div>
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Followers</p>
              {/* <p className="profile_content-counter">{user.followers.length}</p> */}
            </div>
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Follows</p>
              {/* <p className="profile_content-counter">{user.follows.length}</p> */}
            </div>
          </div>
          <div className="profile_content-posts">
            {/* {user.posts.map((img) => {
              <div className="profile_content-post"></div>;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
