import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./reducer/count";
import personReducer from "./reducer/person";
import thunk from "redux-thunk";

const allReducer = combineReducers({
  count: countReducer,
  person: personReducer,
});
export default createStore(allReducer, applyMiddleware(thunk));
