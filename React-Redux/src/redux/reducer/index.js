/**
 * 该文讲用于讲所有reducer汇总为一个reducer
 */
import { combineReducers } from "redux";
import count from "./count";
import persons from "./person";

const allReducer = combineReducers({
  count,
  persons,
});
export default allReducer;
