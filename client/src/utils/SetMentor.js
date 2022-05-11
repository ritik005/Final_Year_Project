import axios from "axios";

const setMentorToken = mentor => {
  if (mentor) {
    axios.defaults.headers.common["x-auth-token"] = mentor;
    localStorage.setItem("mentor", mentor);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("mentor");
  }
};

export default setMentorToken;
