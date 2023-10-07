import { useContext } from "react";
import { ThemeContext } from "../App";

const Context = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      useContext: theme is {theme}
      <br />
      用于跨多级组件传递值
    </div>
  );
};
export default Context;
