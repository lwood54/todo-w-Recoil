/**@jsxImportSource @emotion/react */
import React, { useState } from "react";
import { base, danger } from "./ToDo.styles";
import ToDoList from "./ToDoList";
import { loginState } from "../../atoms/userAtoms";
import { useRecoilState } from "recoil";

function ToDo(props: any) {
  const [_, setLoggedIn] = useRecoilState(loginState);

  function handleLogout() {
    setLoggedIn(false);
    props.history.push(`/`);
  }
  return (
    <div>
      <h1 css={[base, danger]}>{props.match.params.username}'s To Do Application</h1>
      <ToDoList />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default ToDo;
