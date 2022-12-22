import React from "react";
import MainButton from "../styled-components/MainButton";

const AddPost = () => {
  return (
    <div className="container_layout">
      <div className="section_container-addpost">
        <div
          className="section_container-element"
          style={{ marginBottom: "41px", marginTop: "0" }}
        ></div>
        <MainButton type="submit">
          <span>Upload</span>
        </MainButton>
      </div>
    </div>
  );
};

export default AddPost;
