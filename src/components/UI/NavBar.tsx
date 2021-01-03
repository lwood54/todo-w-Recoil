/**@jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { History } from "history";
import { css } from "@emotion/react";
import tw from "twin.macro";
import { withRouter } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginState, usernameState } from "../../atoms/userAtoms";
import { Link } from "react-router-dom";
import { ContainerSC, NavLinkSC, nav_link } from "./NavBar.styles";
import AuthService from "../Login/AuthService";

const NavBar: React.FC<{ history: History }> = ({ history }) => {
  const [username, setUsername] = useRecoilState(usernameState);

  useEffect(() => {
    if (AuthService.isAuthenticated()) {
      setUsername(sessionStorage.getItem("username") as string);
    }
  }, []);

  function handleLogout() {
    if (AuthService.isAuthenticated()) {
      AuthService.logout();
      history.push("/");
    }
  }
  return (
    <nav>
      <ContainerSC>
        <h1>Nav Container</h1>
        <Link to="/">
          <NavLinkSC>Home</NavLinkSC>
        </Link>
        {AuthService.isAuthenticated() ? (
          <>
            <Link css={[nav_link]} to={`/todo/${username}`}>
              To Do List
            </Link>
            <Link tw="bg-blue-300" to="/anotherComp">
              Another Component
            </Link>
          </>
        ) : null}
        <button onClick={handleLogout}>{AuthService.isAuthenticated() ? "Logout" : <Link to="/">Login</Link>}</button>
      </ContainerSC>
    </nav>
  );
};

export default withRouter(NavBar);
