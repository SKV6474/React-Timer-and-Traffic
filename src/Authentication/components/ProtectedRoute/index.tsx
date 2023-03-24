import Cookies from "js-cookie";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props: any) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;
