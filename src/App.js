import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages";
//const superheroes = require('superheroes');

// superheroes.all;s

function App() {
  //let hero = superheroes.random();

  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
