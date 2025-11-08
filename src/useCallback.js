import React, { useState, useMemo, useCallback } from "react";

function Bpp(props) {
  const { click } = props;

  console.log("bpp 执行");

  return <h1 onClick={click}>bpp</h1>;
}

// 将组件进行渲染优化
const BppMemo = React.memo(Bpp);

function App() {
  const [count, setCount] = useState(0);

  // console.log('app 执行')

  // function click () {
  //   alert(1)
  // }

  // let data = {}

  let data = useMemo(() => {
    return {};
  }, []);
  // 对函数进行优化，使其只在依赖项改变时才重新计算
  const click = useCallback(() => {
    alert(1);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>加加+++</button>
      {count}
      <BppMemo click={click} data={data} />
    </div>
  );
}

export default App;
