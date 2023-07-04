import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ArticleComponent from "./components/articleComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticleComponent
          title="This is a world"
          content="Hi"
        ></ArticleComponent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
