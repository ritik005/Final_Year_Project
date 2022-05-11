import {
  MENTOR_REGISTER,
  MENTOR_USER_LOADED,
  MENTOR_LOGIN,
  MENTOR_LOGOUT,
  REQUEST_LOADED
} from "../actions/type";

const initialState = {
  token: localStorage.getItem("token"),
  mloading: false,
  misAuthenticated: false,
  mentor: {},
  application: [],
  loading: true
};
console.log(initialState);

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MENTOR_USER_LOADED:
      return {
        ...state,
        mloading: false,
        misAuthenticated: true,
        mentor: payload
      };
    case REQUEST_LOADED:
      return {
        ...state,
        application: payload,
        loading: false
      };
    case MENTOR_REGISTER:
    case MENTOR_LOGIN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        mloading: false,
        misAuthenticated: true
      };
    case MENTOR_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        mloading: false,
        misAuthenticated: false
      };

    default:
      return state;
  }
}
