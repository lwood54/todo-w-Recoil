/**@jsxImportSource @emotion/react */
import React, { useState } from "react";
import { base, danger, button } from "./ToDo.styles";
import ToDoList from "./ToDoList";
import { loginState } from "../../atoms/userAtoms";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

function ToDo(props: any) {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  function handleLogout() {
    setLoggedIn(false);
    props.history.push(`/`);
  }
  return (
    <div>
      <h1 css={[danger, base]}>{props.match.params.username}'s To Do Application</h1>
      <ToDoList />
      <button onClick={handleLogout}>Logout</button>
      <h3>logged in status: {loggedIn.toString()}</h3>
      <h3>
        <Link to="/">Home</Link>
      </h3>
    </div>
  );
}

export default ToDo;
