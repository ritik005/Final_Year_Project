import React, { Fragment, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
import { setValidation } from "../../actions/validation";
import { useHistory } from "react-router-dom";

function ApplyForm({ register: { isAuthenticated, user }, match }) {
  let history = useHistory();

  const { name, email } = user;
  console.log(name, email);
  const [Application, setApplication] = useState({
    name: name,
    email: email,
    bio: "",
    expectation: "",
    mentorName: match.params.name
  });
  const { bio, expectation, mentorName } = Application;

  //    onSubmit
  const onSubmit = e => {
    e.preventDefault();
    const updateApplication = async () => {
      try {
        let result = await axios.post(
          `/api/applications/${mentorName}`,
          Application
        );
        console.log(result);
        if (result) {
          setValidation(`Thanx For Apply to ${mentorName}`, "success");
          history.push("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    };
    updateApplication();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row card shadow ml-1">
          <h4 style={{ textAlign: "center" }} className="text-primary mt-2">
            Mentorship Registeration{" "}
          </h4>

          <div className="col-lg-12 col-md-12 col-xs-12 mt-3">
            {isAuthenticated ? (
              <Fragment>
                <TextField
                  id="standard-basic"
                  label="Name"
                  style={{ width: "270px" }}
                  name="Name"
                  value={Application.name}
                  disabled
                />
              </Fragment>
            ) : (
              <Fragment>
                <TextField
                  id="standard-basic"
                  label="Name"
                  style={{ width: "270px" }}
                  name="Name"
                />
              </Fragment>
            )}
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12 mt-3">
            {isAuthenticated ? (
              <Fragment>
                <TextField
                  id="standard-basic"
                  label="Email"
                  style={{ width: "270px" }}
                  name="Email"
                  type="email"
                  value={Application.email}
                  disabled
                />
              </Fragment>
            ) : (
              <Fragment>
                <TextField
                  id="standard-basic"
                  label="Email"
                  style={{ width: "270px" }}
                  name="Email"
                  type="email"
                />
              </Fragment>
            )}
          </div>
          <br />
          <div className="col-lg-12 col-md-12 col-xs-12 mt-5">
            <FormHelperText id="my-helper-text">
              Tell us (and your students) a little bit about yourself. This will
              be public. Please write any information your mentees might need in
              here. Also disclose if you want to mentor a specific minority.
              Keep it short, but not too short.
            </FormHelperText>
            <textarea
              className="textarea"
              name="description"
              cols="40"
              rows="5"
              name="bio"
              placeholder="bio"
              onChange={e =>
                setApplication({
                  bio: e.target.value,
                  name,
                  email,
                  expectation,
                  mentorName
                })
              }
            ></textarea>
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12 mt-5">
            <FormHelperText id="my-helper-text">
              Tell us (and your students) a little bit about yourself. This will
              be public. Please write any information your mentees might need in
              here. Also disclose if you want to mentor a specific minority.
              Keep it short, but not too short.
            </FormHelperText>
            <textarea
              className="textarea"
              name="description"
              cols="40"
              rows="5"
              name="bio"
              placeholder="expectation:"
              onChange={e =>
                setApplication({
                  expectation: e.target.value,
                  name,
                  email,
                  bio,
                  mentorName
                })
              }
            ></textarea>
          </div>
          <div class="col-lg-12 col-md-12 col-xs-12 ">
            <div class="panel panel-default">
              <div class="panel-body mt-3">
                <button
                  className="btn btn-success mb-3"
                  style={{ background: "#304160", width: "120px" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-xs-12 "></div>

        <br />
        <br />
      </form>
    </div>
  );
}
ApplyForm.propTypes = {
  register: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  register: state.register
});

export default connect(mapStateToProps)(ApplyForm);
