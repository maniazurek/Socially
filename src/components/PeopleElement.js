import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { followToggle } from "../reducers/profiles";

const PeopleElement = ({ userId, name, avatar, followers }) => {
  const loggedInUser = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  console.log(followers)

  // const isUserFollow = followers.find((user) => user._id === loggedInUser)
  //   ? "unfollow"
  //   : "follow";

  // const onFollowChange = () => {
  //   dispatch(followToggle(userId, isUserFollow));
  // };

  return (
    <div className="section_container-message__profile">
      <div
        className="element_details-message"
        style={{ justifyContent: "space-between" }}
      >
        <Link to={`/people/${userId}`} style={{ textDecoration: "none" }}>
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
        {/* <button className="element_details-text" onClick={onFollowChange}>
        Follow  {isUserFollow === "unfollow" ? "Follow" : "Following"}
        </button> */}
      </div>
    </div>
  );
};

export default PeopleElement;
