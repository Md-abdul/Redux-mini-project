import axios from "axios";
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCRSS } from "./actionType";

export const login = (userData) => (dispatch) => {
  dispatch({ type: AUTH_REQUEST });

  return axios
    .post(`https://reqres.in/api/login`, userData)
    .then((res) => {
      dispatch({ type: AUTH_SUCRSS, payload: res.data.token });
    })
    .catch((err) => {
      dispatch({ type: AUTH_ERROR });
    });
};
