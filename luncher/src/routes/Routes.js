import React from "react";
import { Route, Switch } from "react-router-dom";
import { SchoolContextProvider } from "../contexts/SchoolContext";
import { PrivateRoute } from "./PrivateRoute";
import AppliedRoute from "./AppliedRoute";

import LoginForm from "../components/onboarding/login/LoginForm";
import SignUpForm from "../components/onboarding/signup/SignUpForm";
import SchoolList from "../components/schools/SchoolList";
import Profile from "../components/user-profile/Profile";
import ProfileUpdate from "../components/user-profile/ProfileUpdate";

const Routes = () => (
  <div>
    <SchoolContextProvider>
      <Switch>
        <Route component={SchoolList} exact path="/" />
        <AppliedRoute component={LoginForm} path="/login" />
        <Route component={SignUpForm} path="/signup" />
        <PrivateRoute path="/profile" redirect="/" component={Profile} />
        <Route path="/update-school/:id" component={ProfileUpdate} />
        <Route
          render={() => {
            return <img src="https://http.cat/404" alt="Not Found" />;
          }}
        />
      </Switch>
    </SchoolContextProvider>
  </div>
);
export default Routes;
