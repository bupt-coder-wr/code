const initState = 0;

function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    case "incrementIfOdd":
      return preState + data;
    case "asyncIncrement":
      return preState + data;
    default:
      return preState;
  }
}
export default countReducer;
