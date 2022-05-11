import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";

import Carousel from "react-elastic-carousel";

const DashBoardProfileItem = ({ profile }) => {
  return (
    <Fragment>
      <Carousel>
        <div className="row">
          <div
            className="col-lg-12 col-md-12 col-xs-12 card shadow mt-3"
            style={{ border: "2px solid #d0dce6" }}
          >
            <div className="row">
              {/* Todo -profile handle */}
              {/* <div className="col-lg-4 col-md-4 col-xs-12"> 
                        <figure className="image is-96x96 is-round profile-image profile-photo-edit" style={{verticalAlign:'top',marginBottom:"200px"}}>
                                    <p><img src="../../image/no-profile.png"/></p>
                        </figure>

                        </div> */}
              <div className="col-lg-6 col-md-4 col-xs-12">
                <h3
                  className="title is-4 title-blue nametag mt-3"
                  style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                >
                  {" "}
                  {profile.first_name} {profile.last_name}
                </h3>
                <span
                  className="has-text-grey "
                  style={{ fontSize: "1.1rem", fontWeight: "500" }}
                >
                  {profile.job_title}
                </span>
                <div className="tags mr-5" style={{ marginTop: "15px" }}>
                  <span className="tag is-medium">💻 Personal Chat</span>
                  <span className="tag is-medium">📝 To-Dos</span>
                  <span className="tag is-medium">
                    🏆 Projects &amp; Challenges
                  </span>
                  <span className="tag is-medium">
                    📞 1-on-1 Calls &nbsp;(10x/mo)
                  </span>
                  <span class="tag is-medium">🛎 Hands-On Support</span>
                </div>

                {profile.bio ? <p>{profile.bio.split("", 300)}</p> : <h4></h4>}
                <div className="tags" style={{ marginTop: "1rem" }}>
                  <span
                    className="tag"
                    style={{ background: "#00d1b2", color: "white" }}
                  >
                    {profile.tags[0]}
                  </span>
                  {profile.tags.slice(1, 4).map((tag, index) => (
                    <span className="tag">{tag}</span>
                  ))}
                </div>
                <br />
              </div>

              <div
                className="col-lg-6 col-md-4 col-xs-12"
                style={{ borderLeft: "1px solid #d0dce6" }}
              >
                <br />

                <span
                  className="tag mr-3"
                  style={{
                    background: "#fff",
                    fontSize: "13px",
                    color: "black"
                  }}
                >
                  <LocationOnIcon />
                  <b>{profile.location}</b>
                </span>
                <p
                  id="price-indicator-detail "
                  style={{ fontSize: "30px", color: "black" }}
                >
                  ₹{profile.monthly_fee} <span>per month</span>
                  <div className="row">
                    <div className="col-lg-10 col-md-10 col-xs-12">
                      <Link to="/mentorship/apply" className="btn btn-primary">
                        Apply for Mentorship
                      </Link>
                      <Link
                        to={`/mentor/profile/${profile._id}`}
                        className="btn btn-outline-primary "
                        style={{ width: "180px" }}
                      >
                        Visit Profile
                      </Link>
                    </div>
                    <div className="col-lg-6 col-md-6 col-xs-12"></div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </Fragment>
  );
};

DashBoardProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default DashBoardProfileItem;
