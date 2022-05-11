import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className=" mt-auto py-3 bg-dark text-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <ul>
                <li>MentorBoat</li>
                <li>
                  <p>Your trusted source to find highly-vetted mentors</p>{" "}
                  <p>© 2020 MentorBoat. All Rights Reserved.</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <ul>
                <li>
                  <Link to="/mentor/find" style={{ color: "white" }}>
                    FIND MENTOR
                  </Link>
                </li>
                <li>
                  <Link to="/mentor" style={{ color: "white" }}>
                    BECOME A MENTOR
                  </Link>
                </li>
                <li>
                  <Link to="/mentor/login" style={{ color: "white" }}>
                    {" "}
                    MENTOR LOGIN
                  </Link>
                </li>
                <li>
                  <p>FAQ</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <ul>
                <li>
                  <Link to="/about" style={{ color: "white" }}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/about" style={{ color: "white" }}>
                    PRIVACY POLICY
                  </Link>
                </li>
                <li>
                  <p>INFO@MENTORBOAT.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
