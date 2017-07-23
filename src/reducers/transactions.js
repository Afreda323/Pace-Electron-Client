import { GET_DATA, EDIT_BUDGET, ADD_TRANS } from "../actions/types";

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
    case ADD_TRANS:
      const { amount, description } = action.payload;
      return {
        ...state,
        transactions: [...state.transactions, { amount, description }]
      };
    default:
      return state;
  }
};
