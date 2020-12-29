import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginState } from "../atoms/userAtoms";

// interface Props {
//   path: String;
//   component: typeof React.Component;
// }
function ProtectedRoute({ component: Component, ...rest }: any) {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  console.log("loggedIn: ", loggedIn.toString());
  // return loggedIn ? <Route {...rest} render={Component} /> : <Redirect to={{ pathname: "/alttodo" }} />;
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
