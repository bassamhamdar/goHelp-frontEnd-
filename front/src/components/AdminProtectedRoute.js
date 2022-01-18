import React from "react";
import { Redirect, Route } from "react-router-dom";

export const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("admin_token") !== null) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/admin",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
