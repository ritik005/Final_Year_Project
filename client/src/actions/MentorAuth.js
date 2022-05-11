import {
  MENTOR_USER_LOADED,
  MENTOR_LOGIN,
  MENTOR_REGISTER,
  MENTOR_LOGOUT,
  MENTEE_REQUEST_LOADED
} from "./type";

import axios from "axios";
import { setValidation } from "./validation";
import setAuthToken from "../utils/SetToken";

export const loadMentor = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/mentor/auth");

    dispatch({
      type: MENTOR_USER_LOADED,
      payload: res.data
    });
    const res2 = await axios.get(
      `/api/applications/${res.data.first_name} ${res.data.last_name}`
    );
    dispatch({
      type: MENTEE_REQUEST_LOADED,
      payload: res2.data
    });
  } catch (err) {
    // dispatch({
    //     type:AUTH_ERROR,

    // })
    console.log(err);
  }
};

// Register
export const mentorRegister = formData => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify(formData);

  try {
    const res = await axios.post("/api/mentor", body, config);
    console.log(res);

    dispatch({
      type: MENTOR_REGISTER,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setValidation(error.msg, "error")));
    }
  }
};

export const mentorLogin = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/mentor/auth", body, config);
    console.log(res);
    dispatch(setValidation("Login Success", "success"));
    dispatch({
      type: MENTOR_LOGIN,
      payload: res.data
    });

    dispatch(loadMentor());
  } catch (error) {
    console.log(error.errors);

    const errors = error.response.data[0].errors;

    if (errors) {
      errors.forEach(error => {
        console.log(error);
        dispatch(setValidation(error.msg, "error"));
      });
    }
    // dispatch({
    //     type:LOGIN_FAILED
    // })
  }
};

export const mentorLogout = () => dispatch => {
  dispatch({ type: MENTOR_LOGOUT });
};
