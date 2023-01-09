import React from "react";
import { formatDistanceToNow } from "date-fns";
import { likeFeed } from "../reducers/feed";
import { useDispatch, useSelector } from "react-redux";

const FeedElement = ({ avatar, name, createdAt, imageURL, likes, feedId }) => {
  const loggedInUser = useSelector((store) => store.user.usserId);
  const dispatch = useDispatch;

  const toggleLike = (feedId) => {
    dispatch(likeFeed(feedId));
  };

  return (
    <div
      className="section_container-element"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="element_details-container">
        <div
          className="element_details-img"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className="element_details">
          <p className="element_details-profile">{name}</p>
          <p className="element_details-paragraph">
            {formatDistanceToNow(new Date())}
          </p>
        </div>
      </div>
      <div className="likes_container">
        <button
          className="likes_img"
          onClick={() => toggleLike(feedId)}
        ></button>
        <p className="likes_counter">{likes.length}</p>
      </div>
    </div>
  );
};

export default FeedElement;
