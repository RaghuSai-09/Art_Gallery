import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
        <div className="text-center h-screen bg-fixed bg-cover bg-center flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url(https://w.forfun.com/fetch/02/02dda60c1e079b30bab2e5a484940be6.jpeg)' }}>
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to the Art Gallery
          </h1>
          <p className="text-lg shadow-lg text-white">
            Discover the beauty and creativity of fine art
          </p>
          <Link to="/gallery"
      className="px-8 py-4 mt-5 rounded-full text-white text-lg bg-slate-800 hover:bg-gray-700"
      data-aos="zoom-in-up"
    >
      Get Started
    </Link>
        </div>
    </div>
  );
};

export default Main;
