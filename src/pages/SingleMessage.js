import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../styled-components/MainButton";
import SendIcon from "@mui/icons-material/Send";

import { sendMessage } from "../reducers/conversations";

const SingleMessage = () => {
  const [message, setMessage] = useState("");
  const { conversationId } = useParams();

  const conversation = useSelector((store) =>
    store.conversations.list.find((item) => item._id === conversationId)
  );

  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (message !== "") {
      dispatch(sendMessage(conversationId, userId, message));
      setMessage("");
    }
  };

  return (
    <div className="container_layout message_screen">
      <h3 className="section_heading">
        Message to{" "}
        {
          conversation.interlocutors
            .find((user) => user._id !== userId)
            .name.split(" ")[0]
        }
      </h3>
      <div className="section_container-message">
        {conversation.messages.map((message) => (
          <div
            key={message._id}
            className={
              userId === message.author
                ? "single_message-A"
                : "single_message-B"
            }
          >
            {message.message}
          </div>
        ))}
      </div>
      <form onSubmit={onFormSubmit}>
        <input
          className="send_message-input"
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></input>
        <MainButton
          type="submit"
          className="send_button-message"
          style={{
            color: "white",
            position: "absolute",
            top: "672px",
            left: "288px",
          }}
        >
          <SendIcon style={{ transform: "rotate(-90deg)" }} />
        </MainButton>
      </form>
    </div>
  );
};

export default SingleMessage;
