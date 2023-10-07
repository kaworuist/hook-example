import { useEffect, useState } from "react";

const Effect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log(count1);
  }, [count1, count2]);
  return (
    <div className="card">
      useEffect:
      <button
        onClick={() => {
          setCount1((count1) => count1 + 1);
        }}
      >
        count1 is {count1}
      </button>
      <button
        onClick={() => {
          setCount2((count2) => count2 + 1);
        }}
      >
        count2 is {count2}
      </button>
      <br />
      用于处理副作用，依赖数组中的值发生变更时触发函数
    </div>
  );
};
export default Effect;
