import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  MENTEE_REQUEST_LOADED
} from "./type";

import axios from "axios";
import { setValidation } from "./validation";
import setAuthToken from "../utils/SetToken";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    const res2 = await axios.get(`/api/applications/request/${res.data.name}`);
    dispatch({
      type: MENTEE_REQUEST_LOADED,
      payload: res2.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register
export const register = ({ name, email, password }) => async dispatch => {
  console.log(name, email, password);

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/user", body, config);
    console.log(res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);

    const errors = error.response.data[0].errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setValidation(error.msg, "error"));
      });
    }
    dispatch({
      type: REGISTER_FAILED
    });
  }
};

// Login
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);
    console.log(res);
    dispatch(setValidation("Login Success", "success"));
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setValidation(error.msg, "error")));
    }

    dispatch({
      type: LOGIN_FAILED
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
