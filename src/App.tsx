import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Login/Welcome";
import ToDo from "./components/ToDo/ToDo";
import Error from "./components/Error/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginObserver from "./components/LoginObserver";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <LoginObserver />
        <Router>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <ProtectedRoute path="/todo/:username" component={ToDo} />
            <ProtectedRoute path="/alttodo" component={ToDo} />
            <Route component={Error} />
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
