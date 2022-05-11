import { REQUEST_LOADED } from "./type";
import axios from "axios";
import setAuthToken from "../utils/SetToken";

export const loadRequest = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: REQUEST_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};
