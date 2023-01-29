import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { followToggle } from "../reducers/profiles";

const PeopleElement = ({ userId, name, avatar, followers }) => {
  const loggedInUserId = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  const isUserFollow = followers?.find((user) => user._id === loggedInUserId)
    ? "unfollow"
    : "follow";

  const onFollowChange = () => {
    dispatch(followToggle(userId, isUserFollow));
  };

  return (
    <div className="section_container-message__profile">
      <div
        className="element_details-message element_details-profile"
        style={{ justifyContent: "space-between" }}
      >
        <Link to={`/people/${userId}`}>
          <div className="element_details-info">
            <div className="element_details-img-border">
              <div
                className="element_details-img__profile"
                style={{ backgroundImage: `url(${avatar})` }}
              ></div>
            </div>
            <p className="element_details-name">{name || "Socially User"}</p>
          </div>
        </Link>
        <button
          className={
            isUserFollow === "follow"
              ? "element_details-text"
              : "element_details-text_alt"
          }
          onClick={onFollowChange}
        >
          {isUserFollow === "follow" ? "Follow" : "Following"}
        </button>
      </div>
    </div>
  );
};

export default PeopleElement;
