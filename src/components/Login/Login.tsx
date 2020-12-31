/**@jsxImportSource @emotion/react */
import React, { useState } from "react";
import { History } from "history";
import { withRouter } from "react-router-dom";
import { jsx, css } from "@emotion/react";
import { danger, success } from "./Login.styles";
import { loginState, usernameState } from "../../atoms/userAtoms";
import { useRecoilState } from "recoil";

const Login: React.FC<{ history: History }> = ({ history }) => {
  const [username, setUsername] = useRecoilState(usernameState);
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  const [loginError, setLoginError] = useState(false);

  // destructuring currentTarget.name and currentTarget.value and assigning value to val
  function handleLoginFieldInput({ currentTarget: { name, value: val } }: React.ChangeEvent<HTMLInputElement>) {
    switch (name) {
      case "username":
        setUsername(val);
        break;
      case "password":
        setPassword(val);
        break;
      default:
        break;
    }
  }

  function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();
    // hard coded validation
    if (username === "Logan" && password === "password") {
      setLoggedIn(true);

      // NOTE: if no setTimeout, recoil state is not updated quickly enough
      // and component will only see previous state
      setTimeout(() => {
        history.push(`/todo/${username}`); // to use, import withRouter from 'react-router-dom' and export default withRouter(component)
      }, 0);
    } else {
      setLoggedIn(false);
      setLoginError(true);
      setUsername("");
      setPassword("");
    }
  }
  return (
    <div>
      {!loggedIn ? (
        <>
          <h1>Login</h1>
          {loginError && <h3 css={danger}>Invalid Credentials</h3>}
        </>
      ) : (
        <h3 css={success}>Successfully Logged In</h3>
      )}
      <form>
        <label>
          <h3>Username</h3>
          <input type="text" name="username" onChange={handleLoginFieldInput} value={username} placeholder="username" />
        </label>
        <label>
          <h3>Password</h3>
          <input type="password" name="password" onChange={handleLoginFieldInput} value={password} placeholder="password" />
        </label>
        <button onClick={handleLogin}>Login</button>
        <h3>Logged In: {loggedIn.toString()}</h3>
      </form>
    </div>
  );
};

// withRouter is required in order to have access to props.history
export default withRouter(Login);
