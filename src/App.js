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
        <Route path="/" component={Navigation} />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
