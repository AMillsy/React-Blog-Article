import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ArticleComponent from "./components/articleComponent";
import NavComponent from "./components/navComponent";
function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <ArticleComponent title="This is a world"></ArticleComponent>
    </div>
  );
}

export default App;
