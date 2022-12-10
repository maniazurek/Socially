import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import feed, { getFeed } from "../reducers/feed";

const Feed = () => {
  // const posts = useSelector((store) => store.feed.list);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getFeed());
  // }, []);

  return (
    <>
      {/* <div className="background_rectangle"></div> */}
      <div className="container_layout">
        <h3 className="section_heading">Feed</h3>
        <div className="section_container">
          <div className="section_container-element">
            <div className="element_details-container">
              <div className="element_details-img"></div>
              <div className="element_details">
                <p className="element_details-profile">Dennis Reynolds</p>
                <p className="element_details-paragraph">2 hrs ago</p>
              </div>
            </div>
            <div className="likes_container">
              <div className="likes_img"></div>
              <p className="likes_counter">12</p>
            </div>
          </div>
          <div className="section_container-element">
            <div className="element_details-container">
              <div className="element_details-img"></div>
              <div className="element_details">
                <p className="element_details-profile">Dennis Reynolds</p>
                <p className="element_details-paragraph">2 hrs ago</p>
              </div>
            </div>
            <div className="likes_container">
              <div className="likes_img"></div>
              <p className="likes_counter">12</p>
            </div>
          </div>
          <div className="section_container-element">
            <div className="element_details-container">
              <div className="element_details-img"></div>
              <div className="element_details">
                <p className="element_details-profile">Dennis Reynolds</p>
                <p className="element_details-paragraph">2 hrs ago</p>
              </div>
            </div>
            <div className="likes_container">
              <div className="likes_img"></div>
              <p className="likes_counter">12</p>
            </div>
          </div>
          <div className="section_container-element">
            <div className="element_details-container">
              <div className="element_details-img"></div>
              <div className="element_details">
                <p className="element_details-profile">Dennis Reynolds</p>
                <p className="element_details-paragraph">2 hrs ago</p>
              </div>
            </div>
            <div className="likes_container">
              <div className="likes_img"></div>
              <p className="likes_counter">12</p>
            </div>
          </div>
          <div className="section_container-element">
            <div className="element_details-container">
              <div className="element_details-img"></div>
              <div className="element_details">
                <p className="element_details-profile">Dennis Reynolds</p>
                <p className="element_details-paragraph">2 hrs ago</p>
              </div>
            </div>
            <div className="likes_container">
              <div className="likes_img"></div>
              <p className="likes_counter">12</p>
            </div>
          </div>
          <div className="section_container-element">
            <div className="element_details-container">
              <div className="element_details-img"></div>
              <div className="element_details">
                <p className="element_details-profile">Dennis Reynolds</p>
                <p className="element_details-paragraph">2 hrs ago</p>
              </div>
            </div>
            <div className="likes_container">
              <div className="likes_img"></div>
              <p className="likes_counter">12</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
