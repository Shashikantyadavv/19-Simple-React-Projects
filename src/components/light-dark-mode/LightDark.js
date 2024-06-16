import React from "react";
import useLocalStorage from "./useLocalStorage";
// import "./style.css";

const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDark;
