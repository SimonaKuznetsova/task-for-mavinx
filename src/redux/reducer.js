import { combineReducers } from "redux";
import authReducer from "ducks/auth/reducer";
import { moduleName as authModule } from "ducks/auth/const";
import { reducer as form } from "redux-form";

export const reducer = combineReducers({
  [authModule]: authReducer,
  form,
});
