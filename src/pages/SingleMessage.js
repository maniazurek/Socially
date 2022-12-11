import React from "react";
import { useParams } from "react-router";

const SingleMessage = () => {
  const userId = useParams();

  return (
    <div className="container_layout">
      <h3 className="section_heading">Message to</h3>
      <div className="section_container">
        <div className="single_message">we r goin to c the lions</div>
        <div className="single_message">they are doing a feed thing event at the zoo..</div>
      </div>
    </div>
  );
};

export default SingleMessage;