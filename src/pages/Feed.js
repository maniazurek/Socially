import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFeed } from "../reducers/feed";

import FeedElement from "../components/FeedElement";

const Feed = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const feedList = useSelector((store) => store.feed.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getFeed(accessToken));
    }
  }, [accessToken]);

  return (
    <div className="container_layout">
      <h3 className="section_heading">Feed</h3>
      <div className="section_container">
        {feedList.map((feedElement) => (
          <FeedElement
            avatar={feedElement.user.image}
            name={feedElement.user.name}
            createdAt={feedElement.createdAt}
            imageURL={feedElement.image}
            likes={feedElement.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
