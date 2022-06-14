import React from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Conter App in ReactJS</h1>
      </header>
      {/* <Counter initValue={0}/> */}
      <Counter initValue={108} />
    </div>
  );
}

export default App;
