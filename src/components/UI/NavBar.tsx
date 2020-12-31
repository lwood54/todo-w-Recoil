/**@jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import tw from "twin.macro";
import { useRecoilValue } from "recoil";
import { loginState, usernameState } from "../../atoms/userAtoms";
import { Link } from "react-router-dom";
import { Container, NavLink } from "./NavBar.styles";

function LoginObserver() {
  const loggedIn = useRecoilValue(loginState);
  const username = useRecoilValue(usernameState);
  return (
    <div>
      <Container>
        <Link to="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link to={`/todo/${username}`}>
          <NavLink>To Do List</NavLink>
        </Link>
        <Link to="/anotherComp">Another Component</Link>
      </Container>
    </div>
  );
}

export default LoginObserver;
