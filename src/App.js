import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Main from './components/Main';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import ArtistsGallery from './components/Artists';

const App = () => {
 
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/artists" element={<ArtistsGallery/>} />

      </Routes>
      <Footer/>
    </Router>
  )
};

export default App;
