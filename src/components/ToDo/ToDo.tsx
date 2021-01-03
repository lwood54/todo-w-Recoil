/**@jsxImportSource @emotion/react */
import React, { useState } from "react";
import { base, danger } from "./ToDo.styles";
import ToDoList from "./ToDoList";
import { loginState, usernameState } from "../../atoms/userAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import AuthService from "../Login/AuthService";

function ToDo(props: any) {
  const [_, setLoggedIn] = useRecoilState(loginState);
  const username = useRecoilValue(usernameState);

  return (
    <div>
      <h1 css={[base, danger]}>{props.match.params.username}'s To Do Application</h1>
      <ToDoList />
    </div>
  );
}

export default ToDo;
