import { GET_DATA, EDIT_BUDGET } from "../actions/types";

export default (state = { budget: 0, transactions: [] }, action) => {
  switch (action.type) {
    case GET_DATA:
      const { budget, transactions } = action.payload;
      return {
        ...state,
        budget,
        transactions
      };
    case EDIT_BUDGET: {
      const budget = action.payload;
      return {
        ...state,
        budget
      };
    }
    default:
      return state;
  }
};
