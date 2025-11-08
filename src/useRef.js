import React, { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  console.log(inputRef, "inputRef");

  // 对函数进行优化，使其只在依赖项改变时才重新计算
  // const click = useEffect(() => {}, []);
  const handle = () => {
    console.log(inputRef, "inputRef执行后");
    inputRef.current.focus();
  };
  return (
    <div className="App">
      <button onClick={handle}>加加+++</button>

      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
