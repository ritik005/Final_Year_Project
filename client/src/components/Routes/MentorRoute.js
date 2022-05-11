import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/mentor/login",
              state: {
                from: props.location
              }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
