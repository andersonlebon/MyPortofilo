import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./common/footer";
import Navigation from "./common/navigation";
import Home from "./home";

const Routes = () => {
  return (
    <>
      <Route path="/" component={Navigation} />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Route path="/" component={Footer} />
    </>
  );
};

export default Routes;
