import React from "react";
import "./App.css";
import ReactDOM from "react-dom";

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
function App() {
  return (
    <div className="app">
      <Text theme="blue" />
      {/* <h1>{theme}</h1> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
