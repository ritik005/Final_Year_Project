import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { mentorRegister } from "../../actions/MentorAuth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

function MentorForm({ mentorRegister, misAuthenticated }) {
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    job_title: "",
    location: "",
    highest_eduction: "",
    category: "",
    monthly_fee: "",
    tags: "",
    date: "",
    bio: ""
  });

  const {
    first_name,
    last_name,
    email,
    password,
    job_title,
    location,
    highest_eduction,
    category,
    monthly_fee,
    tags,
    bio
  } = formData;

  // OnChnage
  const onChnage = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // Onsubmit

  const onSubmit = e => {
    e.preventDefault();
    mentorRegister(formData);
  };

  if (misAuthenticated) {
    return <Redirect to="/mentor/dashboard" />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2 style={{ color: "black" }}>Personal Information</h2>
                    <p>
                      Let's introduce ourselves! You know us, we'd like to know
                      who you are!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <TextField
                      id="standard-basic"
                      label="First Name"
                      style={{ width: "270px" }}
                      name="first_name"
                      value={first_name}
                      onChange={onChnage}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="col-lg-6 col-md-6 col-xs-12 ">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel htmlFor="my-input" style={{ width: "270px" }}>
                        Last Name
                      </InputLabel>
                      <Input
                        id="my-input"
                        style={{ width: "270px" }}
                        name="last_name"
                        value={last_name}
                        onChange={onChnage}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
              <br />

              <div className="col-lg-12 col-md-3 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel htmlFor="my-input">Email</InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ width: "570px" }}
                        name="email"
                        type="email"
                        value={email}
                        onChange={onChnage}
                      />
                      <FormHelperText id="my-helper-text">
                        We'll never share your email.
                      </FormHelperText>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel htmlFor="my-input">Job Title</InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ width: "270px" }}
                        placeholder="Example- Maths instructor                                "
                        name="job_title"
                        value={job_title}
                        onChange={onChnage}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel id="label">Location </InputLabel>
                      <Select
                        labelId="label"
                        id="select"
                        style={{ width: "270px" }}
                        name="location"
                        value={location}
                        onChange={onChnage}
                      >
                        <MenuItem value="Udaipur">Udaipur</MenuItem>
                        <MenuItem value="Banglore">Banglore</MenuItem>
                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel id="label">Higher Education </InputLabel>
                      <Select
                        labelId="label"
                        id="select"
                        style={{ width: "270px" }}
                        name="highest_eduction"
                        value={highest_eduction}
                        onChange={onChnage}
                      >
                        <MenuItem value="12th">12th</MenuItem>
                        <MenuItem value="Bachelor">Bachelor</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2 style={{ color: "black" }}>Mentorship Questions</h2>
                    <p>
                      We'd like to learn more about your skills, who you are and
                      some more formalities. Take some time to craft your Bio
                      since it'll be visible to potential mentees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 ">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-xs-12 ">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel id="label">CATEGORY </InputLabel>
                      <Select
                        labelId="label"
                        id="select"
                        style={{ width: "270px" }}
                        name="category"
                        value={category}
                        onChange={onChnage}
                      >
                        <MenuItem value="JEE">JEE</MenuItem>
                        <MenuItem value="GATE">GATE</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel htmlFor="my-input">TAGS</InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ width: "270px" }}
                        placeholder="Physics,maths,dsa"
                        name="tags"
                        value={tags}
                        onChange={onChnage}
                      />
                      <FormHelperText id="my-helper-text">
                        Comma-separated list of your skills (keep it below 10).
                        Mentees will use this to find you.
                      </FormHelperText>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel htmlFor="my-input">
                        MONTHLY FEE IN RS :
                      </InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ width: "270px" }}
                        name="monthly_fee"
                        value={monthly_fee}
                        onChange={onChnage}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body ">
                    <FormControl>
                      <InputLabel htmlFor="my-input">BIO:</InputLabel>
                      <br />
                      <br />
                      <FormHelperText id="my-helper-text">
                        Tell us (and your students) a little bit about yourself.
                        This will be public. Please write any information your
                        mentees might need in here. Also disclose if you want to
                        mentor a specific minority. Keep it short, but not too
                        short.
                      </FormHelperText>

                      <br />

                      <textarea
                        className="textarea"
                        name="description"
                        cols="40"
                        rows="5"
                        name="bio"
                        value={bio}
                        onChange={onChnage}
                      ></textarea>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel htmlFor="my-input">PASSWORD</InputLabel>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ width: "270px" }}
                        name="password"
                        value={password}
                        onChange={onChnage}
                      />
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <button
                      className="btn btn-success mt-3"
                      style={{ background: "#304160", width: "120px" }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

MentorForm.propTypes = {
  mentorRegister: PropTypes.func.isRequired,
  misAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  misAuthenticated: state.mentor.misAuthenticated
});
export default connect(mapStateToProps, { mentorRegister })(MentorForm);
