import { GET_PROFILES, PROFILE_ERROR, GET_PROFILE } from "../actions/type";

const initialState = {
  profiles: [],
  loading: true,
  profile: {},
  error: {}
};
console.log(initialState);

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    default:
      return state;
  }
}
