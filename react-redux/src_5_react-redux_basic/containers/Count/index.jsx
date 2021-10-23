// 引入Count的UI组件
import CountUI from "../../components/Count";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";
/**
 * 1. mapStateToProps 函数返回的是一个对象
 * 2. 返回的对象中的 key 就作为传递给UI组件 props 的 key，value 就作为传递给UI组件props的value
 * 2. mapStateToProps 用于传递状态
 */
const mapStateToProps = (state) => ({ count: state });
/**
 * 1. mapDispatchToProps 函数返回的是一个对象
 * 2. 返回的对象中的key就作为传递给UI组件props的key，value 就作为传递给 UI 组件 props 的 value
 * 2. mapDispatchToProps 用于传递操作状态的方法
 */
const mapDispatchToProps = (dispatch) => {
  return {
    jia: (number) => dispatch(createIncrementAction(number)),
    jian: (number) => dispatch(createDecrementAction(number)),
    jiaAsync: (number) => dispatch(createIncrementAsyncAction(number, 500)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
