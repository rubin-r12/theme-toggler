import React from "react";
import "./App.css";
import ReactDOM from "react-dom";

function App() {
  const [theme, SetTheme] = React.useState("red");

  const onClickHandler = () => {
    SetTheme(theme === "red" ? "blue" : "red");
  };
  return (
    <div className="app">
      <Text theme={theme} />
      <button onClick={onClickHandler}>Change Theme</button>
    </div>
  );
}
function Text({ theme }) {
  return (
    <h1
      style={{
        color: `${theme}`,
      }}
    >
      {theme}
    </h1>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
