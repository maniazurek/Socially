import React from "react";
import socially from "../utils/socially.svg";

const Welcome = () => {
  return (
    <>
      <div className="background_rectangle"></div>
      <div className="background_border"></div>
      <div className="container_form">
        <p className="container_paragraph">Welcome to</p>
        <h2 className="container_title">Socially</h2>
        <img src={socially} style={{ width: "314px", height: "271px" }} />
      </div>
    </>
  );
};

export default Welcome;
