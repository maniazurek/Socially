import React from "react";
import { Link } from "react-router-dom";

const MessagesElement = ({
  conversationId,
  interlocutor,
  interlocutorAvatar,
  messages,
}) => {
  const lastMessage = messages[messages.length - 1].message;
  return (
    <Link to={`/conversations/${conversationId}`}>
      <div className="element_details-message">
        <div className="element_details-img-border">
          <div
            className="element_details-img__profile"
            style={{ backgroundImage: `url(${interlocutorAvatar})` }}
          ></div>
        </div>
        <div className="element_details">
          <p className="element_details-name">{interlocutor}</p>
          <p className="element_details-text_extended">{lastMessage}</p>
        </div>
      </div>
    </Link>
  );
};

export default MessagesElement;
