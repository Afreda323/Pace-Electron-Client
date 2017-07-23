import {
  LOGIN,
  SIGNUP,
  GET_DATA,
  EDIT_BUDGET,
  ADD_TRANS,
  EDIT_TRANS,
  REMOVE_TRANS,
  LOGOUT
} from "./types";
import { SubmissionError } from "redux-form"; // ES6
import axios from "axios";
const API_URL = "http://localhost:3000/api";

export const login = ({ email, password }) => dispatch => {
  return axios
    .post(`${API_URL}/user/signin`, {
      email,
      password
    })
    .then(({ data: { token, userId } }) => {
      localStorage.setItem("jwt", token);
      localStorage.setItem("userId", userId);
      dispatch({
        type: LOGIN,
        payload: { token, userId }
      });
    })
    .catch(e => {
      throw new SubmissionError({ _error: "Invalid Email or Password" });
    });
};

export const signup = ({ email, password }) => dispatch => {
  return axios
    .post(`${API_URL}/user/signup`, {
      email,
      password
    })
    .then(({ data: { token, userId } }) => {
      localStorage.setItem("jwt", token);
      localStorage.setItem("userId", userId);
      dispatch({
        type: SIGNUP,
        payload: { token, userId }
      });
      //   console.log(data);
    })
    .catch(e => {
      throw new SubmissionError({ _error: "There was an issue." });
    });
};

export const logout = () => {
  localStorage.removeItem("jwt");
  return {
    type: LOGOUT
  };
};

export const getData = (token, uid) => dispatch => {
  return axios
    .get(`${API_URL}/user/${uid}`, {
      headers: {
        Authorization: token
      }
    })
    .then(({ data: { transactions, userBudget } }) => {
      dispatch({
        type: GET_DATA,
        payload: { transactions, budget: userBudget }
      });
    })
    .catch(e => {
      return console.log(e);
      //   dispatch(logout());
    });
};
export const editBudget = (userId, budget, token) => dispatch => {
  console.log(userId, budget, token);
  return axios
    .post(
      `${API_URL}/user/budget`,
      { id: userId, budget },
      {
        headers: {
          Authorization: token
        }
      }
    )
    .then(() => {
      dispatch({
        type: EDIT_BUDGET,
        payload: budget
      });
    })
    .catch(e => {
      return console.log(e);
      //   dispatch(logout());
    });
};

export const addTrans = (userId, transId, amount, desc) => {};
export const editTrans = (userId, transId, amount, desc) => {};
export const removeTrans = (userId, transId, amount, desc) => {};
