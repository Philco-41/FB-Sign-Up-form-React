import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ForgotPass from "./Components/ForgotPass";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ForgotPass" element={<ForgotPass />} />
      </Routes>
    </Router>
  );
}

export default App;
