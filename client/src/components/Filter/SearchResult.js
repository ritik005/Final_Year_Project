import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
import Skeleton from "../Layout/Skeleton"

export default function SearchResult({ match, location }) {
  useEffect(() => {
    getSearch();
  }, []);
  const [userData, setuserData] = useState({});
  console.log(userData);

  const getSearch = () => {
    let request = axios({
      method: "GET",
      url: `/api/filter/search/mentor/${location.search}`
    });
    request.then(res => {
      console.log(res);
      setuserData(res.data);
    });
  };
  return (
    <Fragment>
      <p className="lead">
        <i className="fab fa-connectdevelop" />
        Search Result- mentors
      </p>
      <div className="profiles">
        {userData.length > 0 ? (
          userData.map(profile => (
            <SearchItem key={profile._id} profile={profile} />
          ))
        ) : (
          <Skeleton/>
        )}
      </div>
    </Fragment>
  );
}
