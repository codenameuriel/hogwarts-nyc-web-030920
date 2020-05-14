import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import MainContainer from "./MainContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <MainContainer hogs={hogs} />
        <HelloWorld />
      </div>
    );
  }
}

export default App;
