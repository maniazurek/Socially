import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getConversations } from "../reducers/conversations";
import MessageElement from "../components/MessagesElement";

const Messages = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const conversationsList = useSelector((store) => store.conversations.list);
  const userId = useSelector((store) => store.user.userId);
  const dispatch = useDispatch();

  return (
    <div className="container_layout">
      <h3 className="section_heading">Messages</h3>
      <div className="section_container">
        <div className="section_container-message__profile">
          {conversationsList
            .filter((conversation) => conversation.messages.length !== 0)
            .map((conversation) => {
              const interlocutor = conversation.interlocutors.find(
                (user) => user._id !== userId
              );
              return (
                <MessageElement
                key={conversation._id}
                conversationId={conversation._id}
                interlocutor={interlocutor.name}
                interlocutorAvatar={interlocutor.image}
                messages={conversation.messages}
                />
              )
            })}
        </div>
      </div>
    </div>
  );
};

export default Messages;
