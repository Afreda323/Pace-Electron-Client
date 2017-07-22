import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from './auth'
import transactions from './transactions'

export default combineReducers({
  auth,
  transactions,
  form: formReducer
});
