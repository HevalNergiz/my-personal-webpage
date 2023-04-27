import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Portfolio from "./pages/Portfolio";

import Home from "./pages/Home";
import "./assets/css/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
