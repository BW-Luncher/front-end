import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import LoginForm from "./components/login/LoginForm";
import Schools from "./components/schools/Schools";
import SignUpForm from "./components/signup/SignUpForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={Schools} exact path="/" />
          <Route component={LoginForm} path="/login" />
          <Route component={SignUpForm} path="/signup" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
