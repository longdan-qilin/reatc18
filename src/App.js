// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useLayoutEffect, useState } from "react";

function Bpp() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <App />}
      <button onClick={() => setShow(!show)}>切换显示隐藏</button>
    </div>
  );
}
function App() {
  // 定义一个状态，初始值为0
  const [count, setCount] = useState(0);
  const [name, setName] = useState(() => {
    return "张三";
  });
  // 定义一个函数，用于改变状态
  const clickFun = () => {
    setCount(count + 1);
  };
  const btn_click2 = () => {
    setName("李四");
  };
  /* 
    useEffect 第一个参数是一个函数，第二个参数是一个数组
    当第二个参数为空数组时，表示只在组件第一次渲染的时候执行
    当第二个参数不为空数组时，表示只在组件第一次渲染和依赖项变化的时候执行
    useEffect 相当于 componentDidMount 和 componentDidUpdate 的组合

    当我们传入依赖项[a], 当传入多个依赖项的时候[a,b], a或者b发生变化都执行
  */
  useEffect(() => {
    console.log("useEffect 执行了", count);
    // return () => {
    //   console.log("effect 清理函数执行了", count);
    // };
  }, [count]);
  // useLayoutEffect 同步执行，但是会在浏览器绘制之前执行
  // useEffect 异步执行，会在浏览器绘制之后执行
  useLayoutEffect(() => {
    console.log("useLayoutEffect 执行了", count);
    // return () => {
    //   console.log("layout effect 清理函数执行了", count);
    // };
  }, [count]);
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);
  // useEffect(() => {
  //   console.log("我是一个副作用");
  // }, [count, name]);
  // jsx 语法规则： 1. 标签必须闭合，2. 标签必须有根元素
  return (
    <div>
      <h1>
        hello word - {count} - {name}
      </h1>
      <button onClick={clickFun}>+1</button>
      <button onClick={btn_click2}>点我修改名字</button>
    </div>
  );
}

export default Bpp;
