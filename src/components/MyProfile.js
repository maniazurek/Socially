import React from "react";

const MyProfile = () => {
  return (
    <>
      {/* <div className="background_layout"></div> */}
      <div className="container_layout">
        <div className="container_profile-info">
          <div className="container_profile-img">
            <div className="container_profile-img__border">
              <div className="container_profile-img__picture"></div>
            </div>
          </div>
          <h4 className="profile_heading">John Doe</h4>
          <p className="profile_nick">@johndoe</p>
          <p className="profile_message">Message</p>
        </div>
        <div className="profile_content">
          <div className="profile_content-info">
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Post</p>
              <p className="profile_content-counter">35</p>
            </div>
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Followers</p>
              <p className="profile_content-counter">1,552</p>
            </div>
            <div className="profile_content-info__element">
              <p className="profile_content-heading">Follows</p>
              <p className="profile_content-counter">128</p>
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
