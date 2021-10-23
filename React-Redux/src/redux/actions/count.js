import { INCREMENT, DECREMENT } from "../constant";
// import store from "./store";

export const increment = (data) => ({ type: INCREMENT, data });
export const decrement = (data) => ({ type: DECREMENT, data });
// 所谓的异步action，就是指返回值是function
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data));
    }, time);
  };
};
