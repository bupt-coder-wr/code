import {
  INCREMENT,
  DECREMENT,
  INCREMENTIFODD,
  ASYNCINCREMENT,
} from "../constant";
const initState = 0;

function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    case INCREMENTIFODD:
      return preState + data;
    case ASYNCINCREMENT:
      return preState + data;
    default:
      return preState;
  }
}
export default countReducer;
