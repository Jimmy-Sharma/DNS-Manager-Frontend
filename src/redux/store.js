import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { domainReducer } from "./reducer";

const rootReducer = combineReducers({
  domainReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));