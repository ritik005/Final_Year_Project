import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { mentorRegister, loadMentor } from "../../actions/MentorAuth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import axios from "axios";
import MentorProfile from "./MentorProfile";
import store from "../../store";
import { useHistory } from "react-router-dom";

function EditMentor({ mentor: { mentor } }) {
  let {
    job_title,
    location,
    highest_eduction,
    category,
    monthly_fee,
    avatar,
    bio
  } = mentor;
  console.log(mentor);
  useEffect(() => {
    updateMentorData(mentor);
  }, []);

  const [mentordata, updateMentorData] = useState(
    mentor && {
      job_title: job_title,
      location: location,
      highest_eduction: highest_eduction,
      avatar: avatar,
      category: category,
      monthly_fee: monthly_fee,
      bio: bio
    }
  );

  const getInput = e => {
    console.log(e.target.value);
    updateMentorData({
      ...mentordata,
      [e.target.name]: e.target.value
    });
  };

  const uploadPic = async image => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Mentor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dlqxpkg7h/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    if (file) {
      alert("file uploaded..");
    }
    updateMentorData({
      avatar: file.secure_url,
      job_title,
      location,
      highest_eduction,
      category,
      monthly_fee,
      bio
    });
  };
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    const updateProfile = async () => {
      try {
        let result = await axios.post(`/api/mentor/profile/update`, mentordata);
        if (result) {
          history.push("/mentor/profile");
          window.location.reload();
        }
      } catch (err) {
        alert("Some problem..........");
      }
    };
    updateProfile();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-xs-12">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2 style={{ color: "black" }}>
                      Edit Your Personal Information
                    </h2>
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
                    <FormControl>
                      <Input
                        id="my-input"
                        aria-describedby="my-helper-text"
                        style={{ width: "270px" }}
                        placeholder="Example- Maths instructor"
                        name="avatar"
                        type="file"
                        onChange={e => uploadPic(e.target.files[0])}
                      />
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
                        placeholder="Example- Maths instructor"
                        name="job_title"
                        defaultValue={mentordata && mentordata.job_title}
                        onChange={getInput}
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
                        defaultValue={mentordata && mentordata.location}
                        onChange={getInput}
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
                        defaultValue={mentordata && mentordata.highest_eduction}
                        onChange={getInput}
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
              <div className="col-lg-12 col-md-12 col-xs-12 ">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <FormControl>
                      <InputLabel id="label">CATEGORY </InputLabel>
                      <Select
                        labelId="label"
                        id="select"
                        style={{ width: "270px" }}
                        name="category"
                        defaultValue={mentordata && mentordata.category}
                        onChange={getInput}
                      >
                        <MenuItem value="JEE">JEE</MenuItem>
                        <MenuItem value="GATE">GATE</MenuItem>
                      </Select>
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
                        defaultValue={mentordata && mentordata.monthly_fee}
                        onChange={getInput}
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
                        defaultValue={mentordata && mentordata.bio}
                        onChange={getInput}
                      ></textarea>
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

EditMentor.propTypes = {
  mentor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mentor: state.mentor
});

export default connect(mapStateToProps)(EditMentor);
