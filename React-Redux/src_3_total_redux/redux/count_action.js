import { INCREMENT, DECREMENT } from "./constant";
export const createIncrement = (data) => ({ type: INCREMENT, data });
export const createDecrement = (data) => ({ type: DECREMENT, data });
