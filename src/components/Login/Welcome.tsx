import React, { useState } from "react";
import Login from "./Login";
import HelloWorldService from "../../api/todo/HelloWorldService";
import axios from "axios";
// import { loginState } from "../../atoms/userAtoms";
// import { useRecoilState } from "recoil";
// import AuthService from "../Login/AuthService";

function Welcome() {
  const [message, setMessage] = useState("");

  function handleClickHello() {
    HelloWorldService.executeHelloWorldService()
      .then((response) => console.log(response.data))
      .catch((err) => console.log("error: ", err));
    // async function getMessage() {
    //   const res = await fetch("http://localhost:8080/hello-world");
    //   const messageRes = await res;
    //   console.log("response: ", res);
    // setMessage(await messageRes.json());
    // }
    // getMessage();
    //// WORKING asyn/await
    // async function getMessage() {
    //   const res = await axios.get("http://localhost:8080/hello-world");
    //   const messageRes = await res.data;
    //   console.log("data: ", messageRes);
    // }
    // getMessage();
    ////

    // NOTE: this is required format when using fetch and response will be string
    // https://stackoverflow.com/questions/41946457/getting-text-from-fetch-response-object
    // fetch("http://localhost:8080/hello-world")
    //   .then((res) => res.text())
    //   .then((data) => console.log(data));
  }

  // async function fetchMoviesJSON() {
  //   const response = await fetch('/movies');
  //   const movies = await response.json();
  //   return movies;
  // }

  return (
    <div>
      <h1>Welcome to the To Do App</h1>
      <Login />
      <button onClick={handleClickHello}>Click for Hello</button>
    </div>
  );
}

export default Welcome;
