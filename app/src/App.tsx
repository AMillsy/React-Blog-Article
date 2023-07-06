import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ArticleComponent from "./components/articleComponent";
import NavComponent from "./components/navComponent";
function App() {
  return (
    <div className="App">
      <NavComponent></NavComponent>
      <ArticleComponent
        title="This is a world"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet mauris ac urna dictum, in ullamcorper odio ultrices. Aenean posuere dignissim risus id finibus. Aenean vitae eros ut orci faucibus viverra sed ut urna. Ut facilisis eros ipsum, vitae eleifend ante sodales at. Curabitur blandit quis orci ac sodales. Ut id bibendum felis, non cursus enim. Nullam faucibus justo turpis, vitae rhoncus odio pellentesque at. Ut at est et enim aliquet sollicitudin. Suspendisse eu nibh et ligula sollicitudin tincidunt sed sed enim. Integer euismod justo lacus, sit amet facilisis mi gravida at. Aliquam faucibus justo sed sem aliquam, ac finibus libero dictum. Aliquam vestibulum urna libero, ac condimentum nisl tristique sit amet.
        Praesent nec orci ut metus luctus fringilla. Cras a felis enim. Duis ac fermentum nibh, nec blandit lectus. Pellentesque accumsan vestibulum massa, a ultrices velit elementum a. Ut magna augue, ultrices id turpis fermentum, posuere feugiat mauris. Nunc ullamcorper, turpis eu iaculis cursus, dolor orci dictum nisl, ac elementum nibh mi in odio. Sed sed commodo ex, eget auctor magna. In vel nisi massa."
      ></ArticleComponent>
    </div>
  );
}

export default App;
