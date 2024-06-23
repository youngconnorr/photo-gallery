import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/MainPortfolio";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Contacts from "./components/Contacts";
import About from "./components/About";
import PhotoDetails from "./components/PhotoDetails";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/biography" element={<Bio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
