import React, { useState, useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import landingpage from "../../image/landingpage.png";
import study from "../../image/study.png";
import roadmap from "../../image/custom_roadmap.png";
import axios from "axios";

const Landing = ({ isAuthenticated, mentor, type, misAuthenticated }) => {
  const [Search, setSearch] = useState("");

  // Search onchange
  const onChange = e => {
    setSearch({ [e.target.name]: e.target.value });
  };
  console.log(Search.search);
  // Submit

  if (misAuthenticated) {
    return <Redirect to="/mentor/dashboard" />;
  }
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="container">
      <div className="row">
        <h2>Find Mentor</h2>
        <form id="home-search">
          <input
            type="text"
            name="search"
            placeholder='Try "OS " or "Physics "'
            autoComplete="off"
            tabIndex="1"
            id="autocomplete"
            onChange={onChange}
            value={Search.search}
          />
          {Search ? (
            <Fragment>
              <Link to={`/search/?q=${Search.search}`}>
                <button type="submit">Find my mentor</button>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/mentor/find">
                <button type="submit">Find my mentor</button>
              </Link>
            </Fragment>
          )}
        </form>

        <div className="col-lg-6 col-md-6 col-xs-12 mt-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 mt-2">
              <span className="font-weight-300" style={{ fontSize: "30px" }}>
                Make your JEE/GATE preparations easy with{" "}
                <span className="text-primary">Mentor-Boat </span>
              </span>
            </div>
            <br />
            <br />
            <div className="col-lg-12 col-md-12 col-xs-12 mt-2">
              <span
                className="font-weight-300"
                style={{ fontSize: "18px", color: "gray" }}
              >
                work 1 to1 with your personal mentor contomized plan according
                to your preparation level{" "}
              </span>
            </div>
            <br />
            <br />
            <br />
            <br />

            <div className=" col-lg-12 col-md-12 col-xs-12">
              <Link to="/mentor/find" className="btn btn-primary">
                Find Mentor
              </Link>

              <Link to="/mentor" className="text-cta">
                Become a mentor
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 ">
          <img className="landing mb-5" src={landingpage} />
        </div>

        <div className="col-lg-4 col-md-4 col-xs-12 "></div>
        <div className="col-lg-4 col-md-4 col-xs-12 ">
          <h2 className="text-primary" style={{ textAlign: "center" }}>
            How Will We Help You
          </h2>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-12 "></div>
        <br />
        <br />
        <br />
        <br />
        <div className="col-lg-6 col-md-6 col-xs-12 ">
          <img className="study mb-5" src={study} />
        </div>

        <div className="col-lg-6 col-md-6 col-xs-12 ">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <h3 style={{ fontSize: "36px", color: "#454545" }}>
                Work 1-to-1 with your own Personal JEE/GATE Mentor
              </h3>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <p style={{ fontSize: "18px", fontFamily: "robot" }}>
                Things can get stressful around the dinner table for an
                aspirant, and it is thus necessary to have someone to rely on.
                My JEE Mentor connects you with previous years’ toppers who’ll
                motivate and guide you throughout your JEE preparations, both on
                an academic and a personal level. You can call or text your
                mentor anytime you want, and they’ll always be there to help you
                out!
              </p>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <Link
                to="/mentor/find"
                className="btn btn-primary"
                style={{ width: "140px" }}
              >
                Find Mentor
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-xs-12 ">
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <h3 style={{ fontSize: "36px", color: "#454545" }}>
                Recieve a custom roadmap to cover your syllabus
              </h3>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <p style={{ fontSize: "18px", fontFamily: "robot" }}>
                Every student has a different preparation level and hence
                requires a customized plan to cover their remaining topics. Work
                with your mentor and devise a tailor-made timeline to stay on
                track with your preparations. Give your mentor updates daily and
                continuously edit the timeline according to the progress made.
              </p>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12 ">
              <Link
                to="/mentor/find"
                className="btn btn-primary"
                style={{ width: "140px" }}
              >
                Find Mentor
              </Link>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-xs-12">
          <br />
          <br />
          <br />
          <br />
          <img className="study mb-5" src={roadmap} />
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  misAuthenticated: PropTypes.bool
};

const mapsStateToProps = state => ({
  isAuthenticated: state.register.isAuthenticated,
  mentor: state.mentor.mentor,
  misAuthenticated: state.mentor.misAuthenticated
});

export default connect(mapsStateToProps)(Landing);
