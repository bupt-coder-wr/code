import { createStore, applyMiddleware } from "redux";

// redux-thunk 用于支持异步action
import thunk from "redux-thunk";
// 引入redux-devtool浏览器插件
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
