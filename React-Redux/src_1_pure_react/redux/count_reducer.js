const initState = 0;
function countReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;
    case "decrement":
      return preState - data;
    case "increment":
      return preState + data;
    case "increment":
      return preState + data;
    default:
      return preState;
  }
}
