// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      name: "Albert",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("props", this.props.moussa);
  }

  render() {
    console.log("render");
    return (
      <div id="ok" className="ke">
        coucou {this.state.name}
        <HomePage />
      </div>
    );
  }
}

export default App;
