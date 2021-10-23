import { createStore, applyMiddleware } from "redux";

// redux-thunk 用于支持异步action
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
