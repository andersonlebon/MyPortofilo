import React, { Component } from "react";
import "./sass/App.css";
import Home from "./componentes/home";
import { Switch, Route } from "react-router-dom";
import Navigation from "./componentes/common/navigation";
import Footer from "./componentes/common/footer";
import About from "./componentes/about-section";
import Contact from "./componentes/contact";

class App extends Component {
  state = {};
  render() {
    return (
      <main>
        <Route path="/" component={Navigation} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Route path="/" component={Footer} />
      </main>
    );
  }
}

export default App;
