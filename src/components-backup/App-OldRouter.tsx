import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";
import { Profile } from "../pages/Profile";
import { NavBar } from "../NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Profile />} />
          <Route path="*" element={<h1> 404 Page not found </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
