import { Route } from "react-router-dom";
import LoginRoute from "../../Nxtwatch/routes/LoginPage";

export const AuthenticationRoute = [
  <Route exact path="/login" component={LoginRoute} />,
];
