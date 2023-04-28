import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Portfolio from "./pages/Portfolio";
import Post from "./components/Post";
import Home from "./pages/Home";
import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
