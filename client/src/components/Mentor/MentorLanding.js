import React from "react";
import { Link } from "react-router-dom";
import img from "../../image/mentorLanding.svg";
import img1 from "../../image/mentorLandin2.svg";

export default function MentorLanding() {
  const btnStyle = {
    display: "inline-block",
    backgroundColor: "#304160",
    color: "#fff",
    fontWeight: "600",
    fontSize: "15px",
    padding: "12px 28px",
    borderRadius: "5px",
    transition: ".3s",
    border: "0",
    cursor: "pointer"
  };
  return (
    <div>
      <section className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12 text-center">
            <h2 className="mt-5">Share your expertise, make a difference.</h2>
            <p
              style={{
                display: "inline-block",
                color: "grey",
                fontSize: "20px"
              }}
              className="mt-5"
            >
              You give the guidance , we handle the network, discoverability,
              mentee assignment, payment, tooling and knowledge transfers. Help
              young professionals around the world with reaching their goals.
            </p>
            <Link to="/mentor/apply" style={btnStyle} className="mt-5">
              Apply to be a mentor
            </Link>
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12 text-center mt-5">
            <b>
              <h3>How does the platform work?</h3>
            </b>
            <p
              style={{
                display: "inline-block",
                color: "grey",
                fontSize: "20px"
              }}
            >
              We are taking a fresh, innovative stab at building mentorship
              relations, and it's normal for it to be confusing! This is how it
              all works.
            </p>
            <div className="row mt-5 text-center">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <h4 style={{ color: "black", fontSize: "1.2rem" }}>
                  Your public mentoring profile
                </h4>
                <hr />
                <p
                  style={{
                    display: "inline-block",
                    color: "grey",
                    fontSize: "20px"
                  }}
                >
                  As a mentor on MentorBoat, you will receive a public profile
                  designating your price, what you are ready to do, what your
                  experience is, together with some additional information.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <img src={img} style={{ maxWidth: "300px", margin: "0" }} />
              </div>
              <br />
              <br />
              <div className="col-lg-6 col-md-6 col-xs-12 mt-5">
                <img src={img1} style={{ maxWidth: "300px", margin: "0" }} />
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12 mt-5">
                <h4 style={{ color: "black", fontSize: "1.2rem" }}>
                  Choosing mentees wisely
                </h4>
                <hr />
                <p
                  style={{
                    display: "inline-block",
                    color: "grey",
                    fontSize: "20px"
                  }}
                >
                  It is absolutely in your control, who you are deciding to
                  mentor and who you'd rather not work with at the time. Mentees
                  will fill out an application when reaching out for mentorship,
                  stating their goal, expectation, background and more. Based on
                  that information, you can decide whether to take them on as a
                  mentee
                </p>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12 mt-5">
                <Link to="/mentor/apply" style={btnStyle} className="mt-5">
                  Apply to be a mentor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
