import React from "react";
import Login from "./Login";
import { loginState } from "../../atoms/userAtoms";
import { useRecoilState } from "recoil";
import AuthService from "../Login/AuthService";

function Welcome() {
  return (
    <div>
      <h1>Welcome to the To Do App</h1>
      <Login />
      <h3>Loggin State: {AuthService.isAuthenticated().toString()}</h3>
    </div>
  );
}

export default Welcome;
