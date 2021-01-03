/**@jsxImportSource @emotion/react */
import React from "react";
import { RecoilRoot } from "recoil";
import { css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Login/Welcome";
import ToDo from "./components/ToDo/ToDo";
import Error from "./components/Error/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/UI/NavBar";
import AnotherComp from "./components/AnotherComp";

// @emotion/react only
const footer = css`
  color: #23f523;
  background-color: blue;
`;

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <ProtectedRoute path="/todo/:username" component={ToDo} />
            <ProtectedRoute path="/anotherComp" component={AnotherComp} />
            <Route component={Error} />
          </Switch>
        </Router>
        <footer css={footer}>Here is a footer.</footer>
      </RecoilRoot>
    </div>
  );
}

export default App;
