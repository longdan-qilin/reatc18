import React, { useState, useMemo } from "react";
// 13. useMemo的应用场景？
// 它是用于react渲染过程 中的性能优化。
// 适用于： 父组件要进行更新，子组件的重新render计算量比较大，而且结果可以复用。
// 就可以使用useMemo来提升父组件引起子组件不必要渲染的性能优化。
function getCount(count) {
  console.log("执行昂贵的计算");

  console.time("计算耗时");

  let result = 0;
  for (let i = 0; i < count * 1000000000; i++) {
    result += i;
  }
  console.timeEnd("计算耗时");
  return result;
}

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  console.log("ExampleComponent render");

  // const expensiveCalculation = getCount(count);

  const expensiveCalculation = useMemo(() => {
    console.log("执行昂贵的计算");

    console.time("计算耗时");

    let result = 0;
    for (let i = 0; i < count * 100000000; i++) {
      result += i;
    }
    console.timeEnd("计算耗时");
    return result;
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const dec = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={dec}>dec</button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>加加+++</button>
      {count}
      <ExampleComponent />
    </div>
  );
}

export default App;
