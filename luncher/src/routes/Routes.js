import React from "react";
import { Route, Switch } from "react-router-dom";
import { SchoolContextProvider } from "../contexts/SchoolContext";
import { PrivateRoute } from "./PrivateRoute";
import AppliedRoute from "./AppliedRoute";

import FormikLoginForm from "../components/login/LoginForm";
import FormikSignUpForm from "../components/signup/SignUpForm";
import SchoolList from "../components/schools/SchoolList";
import Profile from "../components/user-profile/Profile";
import UpdateSchools from "../components/user-profile/ProfileUpdate";

const Routes = () => (
  <div>
    <SchoolContextProvider>
      <Switch>
        <AppliedRoute component={FormikLoginForm} path="/login" />

        <Route component={SchoolList} exact path="/" />
        <Route component={FormikSignUpForm} path="/signup" />
        <PrivateRoute path="/profile" redirect="/" component={Profile} />
        <Route path="/update-school/:id" component={UpdateSchools} />
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
