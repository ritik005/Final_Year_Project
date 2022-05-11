import { GET_PROFILES, PROFILE_ERROR, GET_PROFILE } from "./type";
import axios from "axios";

// Get All Profiles
export const getProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/mentor/profiles");

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Profile By Id  Single Profile
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/mentor/profile/${userId}`);
    console.log(res);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {}
};
