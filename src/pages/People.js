import React from "react";
import { getUsers } from "../reducers/profiles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const People = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(accessToken));
  }, []);

  return (
    <div className="container_layout">
      <h3 className="section_heading">People</h3>
      <div className="section_container">
        <div className="section_container-message__profile">
          <div
            className="element_details-message"
            style={{ justifyContent: "space-between" }}
          >
            <div className="element_details-info">
              <div className="element_details-img-border">
                <div className="element_details-img__profile"></div>
              </div>
              <p className="element_details-name">Malena Tudi</p>
            </div>
            <p className="element_details-text">Follow</p>
          </div>
        </div>
        <div className="section_container-message__profile">
          <div
            className="element_details-message"
            style={{ justifyContent: "space-between" }}
          >
            <div className="element_details-info">
              <div className="element_details-img-border">
                <div className="element_details-img__profile"></div>
              </div>
              <p className="element_details-name">Malena Tudi</p>
            </div>
            <p className="element_details-text">Follow</p>
          </div>
        </div>{" "}
        <div className="section_container-message__profile">
          <div
            className="element_details-message"
            style={{ justifyContent: "space-between" }}
          >
            <div className="element_details-info">
              <div className="element_details-img-border">
                <div className="element_details-img__profile"></div>
              </div>
              <p className="element_details-name">Malena Tudi</p>
            </div>
            <p className="element_details-text">Follow</p>
          </div>
        </div>{" "}
        <div className="section_container-message__profile">
          <div
            className="element_details-message"
            style={{ justifyContent: "space-between" }}
          >
            <div className="element_details-info">
              <div className="element_details-img-border">
                <div className="element_details-img__profile"></div>
              </div>
              <p className="element_details-name">Malena Tudi</p>
            </div>
            <p className="element_details-text">Follow</p>
          </div>
        </div>{" "}
        <div className="section_container-message__profile">
          <div
            className="element_details-message"
            style={{ justifyContent: "space-between" }}
          >
            <div className="element_details-info">
              <div className="element_details-img-border">
                <div className="element_details-img__profile"></div>
              </div>
              <p className="element_details-name">Malena Tudi</p>
            </div>
            <p className="element_details-text">Follow</p>
          </div>
        </div>{" "}
        <div className="section_container-message__profile">
          <div
            className="element_details-message"
            style={{ justifyContent: "space-between" }}
          >
            <div className="element_details-info">
              <div className="element_details-img-border">
                <div className="element_details-img__profile"></div>
              </div>
              <p className="element_details-name">Malena Tudi</p>
            </div>
            <p className="element_details-text">Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
