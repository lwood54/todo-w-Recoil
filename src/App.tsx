import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Login/Welcome";
import ToDo from "./components/ToDo/ToDo";
import Error from "./components/Error/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import AnotherComp from "./components/AnotherComp";

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
      </RecoilRoot>
    </div>
  );
}

export default App;
