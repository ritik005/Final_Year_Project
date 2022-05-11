import { SET_VALIDATION, REMOVE_VALIDATION } from "./type";
import { v4 as uuidv4 } from "uuid";

export const setValidation = (
  msg,
  validationType,
  timeout = 5000
) => dispatch => {
  const id = uuidv4();
  console.log(dispatch);

  dispatch({
    type: SET_VALIDATION,
    payload: { msg, validationType, id }
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_VALIDATION,
      payload: id
    });
  }, timeout);
};
