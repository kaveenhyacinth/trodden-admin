import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ children, auth = false, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return auth === true ? children : <Redirect to="/login" />;
      }}
    ></Route>
  );
};
