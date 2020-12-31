import { Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loginState } from "../atoms/userAtoms";
import Welcome from "./Login/Welcome";

const ProtectedRoute: React.FC<{ path: string; component: React.FC }> = ({ path, component: Component, ...rest }) => {
  const loggedIn = useRecoilValue(loginState);
  return loggedIn ? <Route {...rest} path={path} component={Component} /> : <Route path="/" component={Welcome} />;
};

export default ProtectedRoute;
