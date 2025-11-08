import React, { forwardRef, useRef } from "react";
// forwardRef 转发ref到子组件 函数组件是ref的，但是通过forwardRef转发给子组件了拿到组件内部的dom实例
const Bpp = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});
function App() {
  const inputRef = useRef(null);
  console.log(inputRef, "inputRef");

  const handle = () => {
    console.log(inputRef, "inputRef执行后");
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <button onClick={handle}>加加+++</button>
      <input ref={inputRef} type="text" />
      <br />
      Bpp组件：
      <Bpp ref={inputRef} />
    </div>
  );
}

export default App;
