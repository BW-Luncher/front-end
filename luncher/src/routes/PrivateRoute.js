/* eslint-disable no-else-return */
import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component;
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // if token is in storage, render the given component
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

// export const PrivateRoute = ({ component: C, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       localStorage.getItem("token") ? (
//         <C {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );
