/**@jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import tw from "twin.macro";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginState, usernameState } from "../../atoms/userAtoms";
import { Link } from "react-router-dom";
import { ContainerSC, NavLinkSC, nav_link } from "./NavBar.styles";

function LoginObserver() {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  const username = useRecoilValue(usernameState);

  function handleLogout() {
    if (loggedIn) {
      setLoggedIn(false);
    }
  }
  return (
    <nav>
      <ContainerSC>
        <h1>Nav Container</h1>
        <Link to="/">
          <NavLinkSC>Home</NavLinkSC>
        </Link>
        {loggedIn ? (
          <>
            <Link css={[nav_link]} to={`/todo/${username}`}>
              To Do List
            </Link>
            <Link tw="bg-blue-300" to="/anotherComp">
              Another Component
            </Link>
          </>
        ) : null}
        <button onClick={handleLogout}>{loggedIn ? "Logout" : <Link to="/">Login</Link>}</button>
      </ContainerSC>
    </nav>
  );
}

export default LoginObserver;
