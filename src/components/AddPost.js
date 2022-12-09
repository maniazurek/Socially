import React from "react";

const AddPost = () => {
  return (
    <div className="container_layout">
      <div className="section_container-addpost">
      <div
        className="section_container-element"
        style={{ marginBottom: "41px", marginTop: "0" }}
      ></div>
      <div className="container_form-button__container" style={{ margin: "0"}}>
        <button className="container_form-button" type="submit">
          Upload
        </button>
      </div>
      </div>
    </div>
  );
};

export default AddPost;
