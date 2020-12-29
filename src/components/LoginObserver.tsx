import React from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../atoms/userAtoms";

function LoginObserver() {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  return (
    <div>
      <h2>Logged In: {loggedIn.toString()}</h2>
    </div>
  );
}

export default LoginObserver;
