import { combineReducers } from "redux";
import { adminReducer } from "./admin";
import { clientReducer } from "./client";
import { commonReducer } from "./common";
import { authReducer } from "./auth";

const appReducer = combineReducers({
  authReducer,
  commonReducer,
  clientReducer,
  adminReducer
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
