import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./comp/navbar";
import Home from "./pages/home";
import Dashboard from "./comp/dashboard";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
