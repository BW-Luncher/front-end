import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../../utils/PrivateRoute";

import AppliedRoute from "../../utils/AppliedRoute";
import FormikLoginForm from "../login/LoginForm";
import Schools from "../schools/Schools";
import FormikSignUpForm from "../signup/SignUpForm";
import Profile from "../profile/Profile";
import NotFound from "../notfound/NotFound";

export default function Routes({ appProps }) {
  return (
    <div>
      <Switch>
        <AppliedRoute
          component={FormikLoginForm}
          path="/login"
          appProps={appProps}
        />

        <Route component={Schools} exact path="/" />
        <Route component={FormikSignUpForm} path="/signup" />
        <PrivateRoute path="/profile" redirect="/" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
