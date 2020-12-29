import React from "react";
import Login from "./Login";
import { loginState } from "../../atoms/userAtoms";
import { useRecoilState } from "recoil";

function Welcome() {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  return (
    <div>
      <h1>Welcome to the To Do App</h1>
      <Login />
      <h3>Loggin State: {loggedIn.toString()}</h3>
    </div>
  );
}

export default Welcome;
