import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";

import Header from "./components/header/Header";
import FormikLoginForm from "./components/login/LoginForm";
import Schools from "./components/schools/Schools";
import FormikSignUpForm from "./components/signup/SignUpForm";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route component={Schools} exact path="/" />
          <Route component={FormikLoginForm} path="/login" />
          <Route component={FormikSignUpForm} path="/signup" />
          <PrivateRoute path="/profile" redirect="/" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
