import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessagesElement from "../components/MessagesElement";
import { getConversations } from "../reducers/conversations";

const Messages = () => {
  const conversationsList = useSelector((store) => store.conversations.list);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  console.log(conversationsList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getConversations(accessToken));
    }
  }, [accessToken, dispatch]);

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
                <MessagesElement
                  key={conversation._id}
                  conversationId={conversation._id}
                  interlocutor={interlocutor.name}
                  interlocutorAvatar={interlocutor.image}
                  messages={conversation.messages}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Messages;
