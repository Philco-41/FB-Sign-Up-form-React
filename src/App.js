import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ForgotPass from "./Components/ForgotPass";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/ForgotPass">
            <ForgotPass />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
