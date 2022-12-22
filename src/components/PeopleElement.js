import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { followToggle } from "../reducers/profiles";

const PeopleElement = ({
  userId,
  name,
  avatar,
  followers,
}) => {
  const loggedInUser = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  // const onFollowChange = () => {
  //   dispatch(followToggle(userId, isUserFollow));
  // };

  // const isUserFollow = followers.find((user) => user._id === loggedInUser)
  //   ? "unfollow"
  //   : "follow";


  return (
    <div className="section_container-message__profile">
      <div
        className="element_details-message"
        style={{ justifyContent: "space-between" }}
      >
        <div className="element_details-info">
          <div className="element_details-img-border">
            <div
              className="element_details-img__profile"
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
          </div>
          <p className="element_details-name">{name}</p>
        </div>
        <button className="element_details-text">
          Follow{/* {isUserFollow === "unfollow" ? "Following" : "Follow"} */}
        </button>
      </div>
    </div>
  );
};

export default PeopleElement;
