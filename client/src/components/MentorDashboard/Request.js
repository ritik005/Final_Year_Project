import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "../Layout/Spinner";
import Accepted from "./Acceped";
import Navbar from "../Layout/Navbar";

function Request({ mentor: { application, loading } }) {
  const token = localStorage.getItem("token");
  const [accepted, setaccepted] = useState({
    accepted: true
  });
  //    accept
  const handleClick = async (e, id) => {
    e.preventDefault();
    console.log(accepted);
    try {
      let result = await axios.post(
        `/api/applications/request/accepted/xyz/${id}`,
        accepted
      );
      console.log(result);
      if (result) {
        window.location.reload();
      }
    } catch (err) {}
  };

  // Reject

  const handleReject = async (e, id) => {
    e.preventDefault();

    console.log(accepted);
    try {
      let result = await axios.delete(
        `/api/applications/mentee/request/delete/xyz/${id}`
      );
      console.log(result);
      if (result) {
        window.location.reload();
      }
    } catch (err) {}
  };

  return (
    <div className="">
      {loading ? (
        <Fragment>
          <Spinner />
        </Fragment>
      ) : (
        <Fragment>
          <h3>Total request {application.length}</h3>
          <Navbar length={application.length} />
          {application.map((req, index) => {
            return (
              <div className="row">
                <div className="col-lg-8 col-md-8 col-xs-12 card shadow ">
                  <span className="text-primary">
                    Your Mentee Request from{" "}
                  </span>
                  <b>{req.name}</b>
                  <b>{req.email}</b>
                  <span>{req.bio}</span>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-12  mt-5">
                  <button
                    onClick={e => handleClick(e, req._id)}
                    className="btn btn-outline-primary"
                    disabled={req.accepted}
                  >
                    Accept{" "}
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={e => handleReject(e, req._id)}
                  >
                    Reject
                  </button>
                </div>
                <div className="col-lg-2 col-md-2 col-xs-12  mt-3"></div>
              </div>
            );
          })}
        </Fragment>
      )}
    </div>
  );
}

Request.propTypes = {
  mentor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mentor: state.mentor
});

export default connect(mapStateToProps)(Request);
