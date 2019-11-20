import React from "react";
import { Route, Switch } from "react-router-dom";
import { SchoolContextProvider } from "../../context/SchoolContext";
import { PrivateRoute } from "../../utils/PrivateRoute";
import AppliedRoute from "../../utils/AppliedRoute";

import FormikLoginForm from "../login/LoginForm";
import FormikSignUpForm from "../signup/SignUpForm";
import SchoolList from "../schools/SchoolList";
import Profile from "../profile/Profile";

const Routes = ({ appProps }) => (
  <div>
    <SchoolContextProvider>
      <Switch>
        <AppliedRoute
          component={FormikLoginForm}
          path="/login"
          appProps={appProps}
        />

        <Route component={SchoolList} exact path="/" />
        <Route component={FormikSignUpForm} path="/signup" />
        <PrivateRoute path="/profile" redirect="/" component={Profile} />
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
