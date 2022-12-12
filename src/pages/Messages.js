import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getConversations } from "../reducers/conversations";

const Messages = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const conversationsList = useSelector((store) => store.conversations.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getConversations(accessToken));
    }
  }, [accessToken]);

  return (
    <div className="container_layout">
      <h3 className="section_heading">Messages</h3>
      <div className="section_container">
        <div className="section_container-message__profile">
          <div className="element_details-message">
            <div className="element_details-img-border">
              <div className="element_details-img__profile"></div>
            </div>
            <div className="element_details">
              <p className="element_details-name">Malena Tudi</p>
              <p className="element_details-text">Hey, how’s it goin?</p>
            </div>
          </div>
        </div>
        <div className="section_container-message__profile">
          <div className="element_details-message">
            <div className="element_details-img-border">
              <div className="element_details-img__profile"></div>
            </div>
            <div className="element_details">
              <p className="element_details-name">Malena Tudi</p>
              <p className="element_details-text">Hey, how’s it goin?</p>
            </div>
          </div>
        </div>
        <div className="section_container-message__profile">
          <div className="element_details-message">
            <div className="element_details-img-border">
              <div className="element_details-img__profile"></div>
            </div>
            <div className="element_details">
              <p className="element_details-name">Malena Tudi</p>
              <p className="element_details-text">Hey, how’s it goin?</p>
            </div>
          </div>
        </div>
        <div className="section_container-message__profile">
          <div className="element_details-message">
            <div className="element_details-img-border">
              <div className="element_details-img__profile"></div>
            </div>
            <div className="element_details">
              <p className="element_details-name">Malena Tudi</p>
              <p className="element_details-text">Hey, how’s it goin?</p>
            </div>
          </div>
        </div>
        <div className="section_container-message__profile">
          <div className="element_details-message">
            <div className="element_details-img-border">
              <div className="element_details-img__profile"></div>
            </div>
            <div className="element_details">
              <p className="element_details-name">Malena Tudi</p>
              <p className="element_details-text">Hey, how’s it goin?</p>
            </div>
          </div>
        </div>
        <div className="section_container-message__profile">
          <div className="element_details-message">
            <div className="element_details-img-border">
              <div className="element_details-img__profile"></div>
            </div>
            <div className="element_details">
              <p className="element_details-name">Malena Tudi</p>
              <p className="element_details-text">Hey, how’s it goin?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
