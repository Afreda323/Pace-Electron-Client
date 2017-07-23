import {
  LOGIN,
  SIGNUP,
  LOGOUT,
  EDIT_BUDGET,
  ADD_TRANS,
  EDIT_TRANS,
  REMOVE_TRANS
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("jwt") || null,
  userId: localStorage.getItem("userId") || null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
    case LOGIN:
      const { userId, token } = action.payload;
      return {
        ...state,
        userId,
        token
      };
    case LOGOUT:
      return {
        ...state,
        userId: null,
        token: null
      };
    default:
      return state;
  }
};
