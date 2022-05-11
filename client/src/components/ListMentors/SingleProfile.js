import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/Profile";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function SingleProfile({ getProfileById, match, profile, isAuthenticated }) {
  console.log(profile.tags);
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <Fragment>
      <Link
        to="/mentor/find"
        className="mr-5 mt-5"
        style={{ color: "black", fontSize: "1.00rem", marginLeft: "-10px" }}
      >
        <ArrowBackIosIcon /> BACK TO MENTORS
      </Link>
      <div className="row ">
        <div
          className="col-lg-9 col-md-9 col-xs-6 card shadow mt-5"
          style={{ border: "2px solid #d0dce6" }}
        >
          <figure
            className="image is-96x96 is-round  "
            style={{ verticalAlign: "top", marginBottom: "100px" }}
          >
            <p>
              <img src={profile.avatar} />
            </p>
          </figure>

          <h3
            className="title is-4 title-blue nametag mt-3"
            style={{ fontSize: "1.2rem", fontWeight: "bold" }}
          >
            {" "}
            {profile.first_name} {profile.last_name}{" "}
          </h3>
          <span className="mr-3">
            <LocationOnIcon style={{ color: "#00d1b2!important" }} />{" "}
            {profile.location}
          </span>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: "500",
              color: "#304160!important"
            }}
          >
            {profile.job_title}
          </span>
          <div className="tags " style={{ marginTop: "15px" }}>
            <span className="tag is-medium">💻 Personal Chat</span>
            <span className="tag is-medium">📝 To-Dos</span>
            <span className="tag is-medium">🏆 Projects &amp; Challenges</span>
            <span className="tag is-medium">
              📞 1-on-1 Calls &nbsp;(10x/mo)
            </span>
            <span className="tag is-medium">🛎 Hands-On Support</span>
          </div>
          {profile.bio ? <p>{profile.bio}</p> : <h4></h4>}
        </div>

        <div className="col-lg-3 col-md-3 col-xs-6 mt-5">
          <div>
            <p id="price-indicator-detail">
              ₹{profile.monthly_fee} <b className="ml-4">per month</b>
              <br />
            </p>
          </div>
          <br />
          {isAuthenticated ? (
            <Fragment>
              <Link
                to={`/mentorship/apply/${profile.first_name} ${profile.last_name}`}
                className="btn btn-primary"
              >
                Apply for Mentorship
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/login" className="btn btn-primary">
                Apply for Mentorship
              </Link>
            </Fragment>
          )}

          <br />
          <hr />
          <br />
          <p className="mentordetail-section-title">Skills taught by mentor</p>
          <div className="tags" style={{ marginTop: "1rem" }}>
            {profile.tags}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

SingleProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  profile: state.profile.profile,
  isAuthenticated: state.register.isAuthenticated
});

export default connect(mapStateToProps, { getProfileById })(SingleProfile);
