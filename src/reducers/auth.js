import {
  LOGIN,
  SIGNUP,
  EDIT_BUDGET,
  ADD_TRANS,
  EDIT_TRANS,
  REMOVE_TRANS
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("authToken") || null
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
