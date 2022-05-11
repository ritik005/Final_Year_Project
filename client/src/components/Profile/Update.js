import React, { useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

import { connect } from "react-redux";
import { mentorRegister } from "../../actions/MentorAuth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function EditMentor({ register: { user } }) {
  const { name, email, avatar, bio } = user;

  const [menteedata, updateMenteeData] = useState({
    name: name,
    email: email,
    bio: bio,
    avatar: avatar
  });

  const getInput = e => {
    console.log(e.target.value);
    updateMenteeData({
      ...menteedata,
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
    updateMenteeData({
      avatar: file.secure_url,
      name,
      email,
      bio
    });
  };
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    const updateProfile = async () => {
      try {
        let result = await axios.post(`/api/mentee/profile/update`, menteedata);
        if (result) {
          history.push("/mentee/profile");
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
          <div className="col-lg-12 col-md-12 col-xs-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <FormControl>
                  <InputLabel htmlFor="my-input">Name</InputLabel>
                  <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    style={{ width: "270px" }}
                    name="name"
                    value={user && menteedata.name}
                    onChange={getInput}
                    disabled
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <FormControl>
                  <InputLabel htmlFor="my-input">Email</InputLabel>
                  <Input
                    id="my-input"
                    aria-describedby="my-helper-text"
                    style={{ width: "270px" }}
                    name="email"
                    defaultValue={user && menteedata.email}
                    onChange={getInput}
                    disabled
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-xs-12">
            <div className="panel panel-default">
              <div className="panel-body">
                <FormControl>
                  <InputLabel htmlFor="my-input">Bio</InputLabel>
                  <textarea
                    className="textarea"
                    name="description"
                    cols="40"
                    rows="5"
                    name="bio"
                    defaultValue={user && menteedata.bio}
                    onChange={getInput}
                  ></textarea>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-xs-12">
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
          <hr></hr>
        </div>
        <hr />
      </form>
    </div>
  );
}

EditMentor.propTypes = {
  register: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  register: state.register
});

export default connect(mapStateToProps)(EditMentor);
