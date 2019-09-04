import React, { Component } from "react";
import Home from "./container/components/home/index";
import ToDo from "./container/components/todo/index";
import MainMenu from "./container/components/menu/MainMenu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
 
  render() {
    return (
      <div id="app">
        <Router>
          <MainMenu />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />}></Route>
            <Route path="/todo" component={ToDo}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
