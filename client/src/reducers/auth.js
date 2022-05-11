import {
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_FAILED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  MENTEE_REQUEST_LOADED
} from "../actions/type";

// Auth intial state
const intialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
  request: []
};

export default function(state = intialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case MENTEE_REQUEST_LOADED:
      return {
        ...state,
        loading: false,
        request: payload
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        loading: false,
        isAuthenticated: true
      };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        loading: true,
        isAuthenticated: false
      };

    default:
      return state;
  }
}
