import React, { Component } from "react";
import "./sass/App.css";
import Home from "./componentes/home";
import { Switch, Route } from "react-router-dom";
import Navigation from "./componentes/common/navigation";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Navigation} />
        </Switch>
      </div>
    );
  }
}

export default App;
