import { useEffect, useRef, useState } from "react";

const Effect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const id = useRef(0);
  useEffect(() => {
    id.current = setInterval(() => {
      console.log(count1);
    }, 1000);
    return () => {
      clearInterval(id.current);
    };
  }, [count1]);
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
