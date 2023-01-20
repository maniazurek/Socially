import React from "react";
import { getUsers } from "../reducers/profiles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PeopleElement from "../components/PeopleElement";

const People = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const peopleList = useSelector((store) => store.profiles.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(getUsers(accessToken));
    }
  }, [accessToken, dispatch]);

  return (
    <div className="container_layout">
      <h3 className="section_heading">People</h3>
      <div className="section_container">
        {peopleList.map((profile) => (
          <PeopleElement
            key={profile._id}
            userId={profile._id}
            name={profile.name}
            login={profile.login}
            avatar={profile.image}
            followers={profile.followers}
            follows={profile.follows}
          />
        ))}
        <PeopleElement />
      </div>
    </div>
  );
};

export default People;
