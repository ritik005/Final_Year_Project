import React from "react";
import { Route, Redirect } from "react-router-dom";

const MentorRoute = ({ component: Component, ...rest }) => {
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
              pathname: "/login",
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

export default MentorRoute;
