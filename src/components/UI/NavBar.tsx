/**@jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { History } from "history";
import { withRouter } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginState, usernameState } from "../../atoms/userAtoms";
import { Link } from "react-router-dom";
import { ContainerSC, NavLinkSC } from "./NavBar.styles";
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
        {AuthService.isAuthenticated() && (
          <>
            <Link to={`/todo/${username}`}>
              <NavLinkSC>To Do List</NavLinkSC>
            </Link>
            <Link tw="bg-blue-300" to="/anotherComp">
              <NavLinkSC>A Different Component</NavLinkSC>
            </Link>
          </>
        )}
        <button onClick={handleLogout}>{AuthService.isAuthenticated() ? "Logout" : <Link to="/">Login</Link>}</button>
      </ContainerSC>
    </nav>
  );
};

export default withRouter(NavBar);
