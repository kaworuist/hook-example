import { useState } from "react";

const State = () => {
  // 区分两种状态的数据
  const [num1, setNum1] = useState(0); //不能直接修改num1，state需要通过setState修改
  let num2 = 0;
  return (
    <div className="card">
      useState:
      <button
        onClick={() => {
          setNum1(1);
        }}
      >
        num1 is {num1}
      </button>
      <button
        onClick={() => {
          num2 = 1;
        }}
      >
        num2 is {num2}
      </button>
      <br />
      用于管理组件自身的状态
    </div>
  );
};
export default State;
