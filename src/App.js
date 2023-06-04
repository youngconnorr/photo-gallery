import React from 'react';
import './index.css';
import Navbar from './Navbar';
import Portfolio from './MainPortfolio'
import Home from './Home'
import Bio from './Bio'
import Contacts from './Contacts'
import About from './About'
import PhotoOne from './PhotoPages/PhotoOne'
import PhotoTwo from './PhotoPages/PhotoTwo'
import PhotoThree from './PhotoPages/PhotoThree'
import PhotoFour from './PhotoPages/PhotoFour'
import PhotoFive from './PhotoPages/PhotoFive'
import PhotoSix from './PhotoPages/PhotoSix'
import PhotoSeven from './PhotoPages/PhotoSeven'
import PhotoEight from './PhotoPages/PhotoEight'
import PhotoNine from './PhotoPages/PhotoNine'

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
        <Route path="/photo-2" element={<PhotoTwo />} />
        <Route path="/photo-3" element={<PhotoThree />} />
        <Route path="/photo-4" element={<PhotoFour />} />
        <Route path="/photo-5" element={<PhotoFive />} />
        <Route path="/photo-6" element={<PhotoSix />} />
        <Route path="/photo-7" element={<PhotoSeven />} />
        <Route path="/photo-8" element={<PhotoEight />} />
        <Route path="/photo-9" element={<PhotoNine />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App

