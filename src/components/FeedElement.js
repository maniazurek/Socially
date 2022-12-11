import React from "react";
import { compareAsc, format } from 'date-fns'

const FeedElement = ({ avatar, name, createdAt, imageURL, likes }) => {
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
            {new Date(createdAt).toDateString()}
          </p>
        </div>
      </div>
      <div className="likes_container">
        <div className="likes_img"></div>
        <p className="likes_counter">{likes}</p>
      </div>
    </div>
  );
};

export default FeedElement;
