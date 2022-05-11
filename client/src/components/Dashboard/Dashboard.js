import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import InfoIcon from "@material-ui/icons/Info";
import application from "../../image/onboarding_trans.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../../actions/auth";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import store from "../../store";
import setAuthToken from "../../utils/SetToken";

function Dashboard({ register: { user, request }, loadUser }) {
  // Fetch applied Application
  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <div className="row">
        <h3>
          Active Aplications <InfoIcon />
        </h3>
        <div className="col-lg-12 col-md-12 col-xs-12 ">
          <div className="row">
            {request ? (
              <Fragment>
                {request &&
                  request.map((application, index) => {
                    return (
                      <div
                        className="col-lg-4 col-md-4 col-xs-12 ml-2 mt-2 card shadow "
                        style={{ border: "2px solid #d0dce6" }}
                        key={index}
                      >
                        <h4 style={{ color: "#304160" }}>
                          You applied to {application.mentorName}
                        </h4>
                        <br />
                        <br />
                        {application.accepted ? (
                          <Fragment>
                            <span style={{ color: "Green", fontSize: "20px" }}>
                              Accepted{" "}
                            </span>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <span
                              style={{ color: "#ffbe1b", fontSize: "20px" }}
                            >
                              Awaiting Response{" "}
                            </span>
                          </Fragment>
                        )}
                      </div>
                    );
                  })}
              </Fragment>
            ) : (
              <Fragment>
                no application
                <div className="col-lg-6 col-md-6 col-xs-6 ">
                  <img src={application} alt={application} />
                </div>
                <div className="col-lg-6 col-md-6 col-xs-6 ">
                  <h3>Ooops!</h3>
                  <p>
                    You don't have any open applications yet. Once you've
                    contacted a mentor, they will show up here!
                  </p>
                  <Link to="/mentor/find" className="btn btn-primary w-100">
                    Find Mentor
                  </Link>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  register: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  register: state.register
});

export default connect(mapStateToProps, { loadUser })(Dashboard);
