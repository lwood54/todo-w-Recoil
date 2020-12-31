import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState, usernameState } from "../atoms/userAtoms";
import { Link } from "react-router-dom";

function LoginObserver() {
  const loggedIn = useRecoilValue(loginState);
  const username = useRecoilValue(usernameState);
  return (
    <div>
      <h2>
        Logged In: {loggedIn.toString()} as user: {username}
      </h2>
      <Link to="/">Home</Link>
      <Link to={`/todo/${username}`}>To Do List</Link>
      <Link to="/anotherComp">Another Component</Link>
    </div>
  );
}

export default LoginObserver;
