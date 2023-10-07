import { createContext, memo, useState } from "react";
import "./App.css";
import Effect from "./Hook/Effect";
import Memo from "./Hook/Memo";
import Ref from "./Hook/Ref";
import State from "./Hook/State";
import Context from "./Hook/Context";

export const ThemeContext = createContext("");
function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="App">
      <State />
      <Effect />
      <Ref />
      <Memo />
      <ThemeContext.Provider value={theme}>
        <Context />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
