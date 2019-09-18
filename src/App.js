import React, { Component } from "react";
import Home from "./container/components/home/index";
import ToDo from "./container/components/todo/index";
import MainMenu from "./container/components/menu/MainMenu";
import Radio from "./container/components/radio/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div id="app">
        <Router>
          <MainMenu />
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />}></Route>
            <Route path="/todo" render={props => <ToDo {...props} />}></Route>
            <Route path="/radio" render={props => <Radio {...props} />}></Route>
          </Switch>
        </Router>
        <footer>
          <div className="footer-container">
            <span>
              This website was powered by, React JS, Redux, Java and more
              assets, APIs from the Internet. &copy; Nguyen Bach Toan
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
