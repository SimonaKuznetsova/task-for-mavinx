import { combineReducers } from "redux";
import authReducer from "ducks/auth/reducer";
import { moduleName as authModule } from "ducks/auth/const";
import { reducer as form } from "redux-form";
import { connectRouter } from "connected-react-router";

export const createRootReducer = (history) =>
  combineReducers({
    [authModule]: authReducer,
    form,
    router: connectRouter(history),
  });
