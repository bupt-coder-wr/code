import { ADD_PERSON } from "../constant";
import { nanoid } from "nanoid";

const initState = [{ name: "Tom", age: 18, id: nanoid() }];
function personReducer(preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
export default personReducer;
