// index.js

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import idReducer from "./idReducer";

const counterApp = combineReducers({
  counterReducer,
  idReducer
});

export default counterApp;
