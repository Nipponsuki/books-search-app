import React, { Component } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";
import Fade from "react-reveal/Fade";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Fade>
                <Route exact path="/details/:id" component={Book} />
              </Fade>
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
