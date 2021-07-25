import React, { Component } from "react";
import "./sass/App.css";
import Home from "./componentes/home";
import { Switch, Route } from "react-router-dom";
import Navigation from "./componentes/common/navigation";
import Footer from "./componentes/common/footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Route path="/" component={Navigation} />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
