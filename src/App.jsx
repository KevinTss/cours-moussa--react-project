import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Router from "./router";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
