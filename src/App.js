import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Portfolio from './MainPortfolio'
import Home from './Home'
import Bio from './Bio'
import Contacts from './Contacts'
import About from './About'
import PhotoOne from './PhotoPages/PhotoOne'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/biography" element={<Bio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/photo-1" element={<PhotoOne />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App

