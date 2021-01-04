import { Route, Redirect } from "react-router-dom";
import Welcome from "./Login/Welcome";
import AuthService from "./Login/AuthService";

const ProtectedRoute: React.FC<{ path: string; component: React.FC }> = ({ path, component: Component, ...rest }) => {
  return AuthService.isAuthenticated() ? <Route {...rest} path={path} component={Component} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
