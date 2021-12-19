import React from "react";
import { Redirect, Route } from "react-router-dom";

export const OrgProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("org_token") !== null) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/org/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
