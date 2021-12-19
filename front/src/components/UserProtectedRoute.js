import React from "react";
import { Redirect, Route } from "react-router-dom";

export const UserProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("user_token") !== null) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/user/login",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};
