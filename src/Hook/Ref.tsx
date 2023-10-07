import { useRef } from "react";
const Ref = () => {
  const ref1 = useRef(null);
  return (
    <div>
      useRef:
      <button onClick={() => ref1.current?.focus()}>focus</button>
      <input type="text" ref={ref1} />
      <br />
      1.用于直接操控真实dom或第三方元素 2.用于存储不会触发渲染的值
    </div>
  );
};
export default Ref;
