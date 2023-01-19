import React, { useState } from "react";
import MainButton from "../styled-components/MainButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { postFeed } from "../reducers/feed";

const AddPost = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(postFeed(image, navigate));
  };

  return (
    <div className="container_layout">
      <div className="section_container-addpost">
        <form onSubmit={onFormSubmit}>
          <label htmlFor="image">
            <input
              className="section_container-input"
              type="file"
              onChange={onImageChange}
              id="image"
              accept="image/*"
            />
            <img
              src={
                image ? URL.createObjectURL(image) : "/assets/addpost_placeholder.jpeg"
              }
              alt="Preview"
              className={
                image
                  ? "section_container-element"
                  : "section_container-element-add"
              }
              style={{ marginBottom: "41px", marginTop: "0" }}
            />
          </label>
          <div className="section_container-button">
            <MainButton type="submit">
              <span>Upload</span>
            </MainButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
