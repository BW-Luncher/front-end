import React from "react";
import { Route } from "react-router-dom";

const AppliedRoute = ({ component: Component, appProps, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...appProps} />} />
);

export default AppliedRoute;
