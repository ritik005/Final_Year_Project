import { SET_VALIDATION, REMOVE_VALIDATION } from "../actions/type";

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_VALIDATION:
      return [...state, payload];
    case REMOVE_VALIDATION:
      return state.filter(validation => validation.id !== payload);
    default:
      return state;
  }
}
