import React from "react";

const PeopleElement = ({ key, userId, name, login, avatar, followers, follows }) => {
  return (
    <div className="section_container-message__profile">
      <div
        className="element_details-message"
        style={{ justifyContent: "space-between" }}
      >
        <div className="element_details-info">
          <div className="element_details-img-border">
            <div className="element_details-img__profile" style={{backgroundImage: `url(${avatar})`}}></div>
          </div>
          <p className="element_details-name">{name}</p>
        </div>
        <button className="element_details-text">Follow</button>
      </div>
    </div>
  );
};

export default PeopleElement;
