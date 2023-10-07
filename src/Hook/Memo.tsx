import { useState, useMemo } from "react";

const Memo = () => {
  const [num1, setNum1] = useState(0);
  const num2 = useMemo(() => num1 * 2, [num1]);
  const complex = <div>waste time</div>;
  return (
    <div className="card">
      useMemo:
      <button
        onClick={() => {
          setNum1((num1) => num1 + 1);
        }}
      >
        num1 is {num1}, num2 is {num2}
        {complex}
      </button>
      <br />
      用于设置计算属性以及缓存值
    </div>
  );
};
export default Memo;
