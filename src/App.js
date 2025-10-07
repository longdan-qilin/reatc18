// import logo from "./logo.svg";
import "./App.css";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    // console.log("constructor");
    this.state = {
      name: "张三",
      money: 1000,
    };
  }

  /**
   * 静态方法，用于根据组件的 props 和 state 计算派生状态。
   *
   * @param props - 组件的 props 对象。
   * @param state - 组件的 state 对象。
   * @returns 返回一个新的对象，该对象将作为组件的派生状态。
   */
  static getDerivedStateFromProps(props, state) {
    // console.log("getDerivedStateFromProps");
    // console.log("props", props);
    // console.log("state", state);
    // if (state.money === 1000) {
    //   return {
    //     money: "一千元",
    //     name: "王五",
    //   };
    // }
    return null; // 返回 null 表示不更新状态
  }
  /**
   * 在最近的渲染输出提交给DOM之前调用此方法。
   * 它允许类组件在它们将要更新之前“捕捉”一些信息（例如滚动位置）。
   * 这个生命周期返回的任何值都将作为参数传递给componentDidUpdate()。
   *
   * @param {Object} prevProps - 上一次的props对象。
   * @param {Object} prevState - 上一次的状态对象。
   * @returns {any} 返回一个值，这个值将作为参数传递给componentDidUpdate()。
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return {
      snapshot: "快照数据",
    };
  }
  // 组件挂载完成之后执行
  componentDidMount() {
    console.log("componentDidMount 组件挂载完成");
  }

  /**
   * 当组件更新时调用
   *
   * @param prevProps 上一次的 props
   * @param prevState 上一次的状态
   * @param snapshot 快照值，用于持久化 UI 状态（在 React 16.8 及更高版本中可用）
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
  }
  handle = () => {
    this.setState({
      name: "李四",
    });
  };
  render() {
    console.log("render");
    const { name, money } = this.state;
    return (
      <div>
        <h1>
          {name} - {money}
        </h1>
        <button onClick={this.handle}>切换数据</button>
      </div>
    );
  }
}

export default App;
