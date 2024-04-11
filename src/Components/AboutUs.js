import React from "react";
import aditya from '../assets/images/aditya.jpg';
import harin from '../assets/images/harin.jpg'

function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-black to-blue-900 min-h-screen py-12 flex items-center justify-center">
    <div className="container mx-auto">
      <h1 className="text-4xl text-white font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Person 1 */}
        <div className="text-center">
          <img
            src={harin}
            alt="Person 1"
            className="rounded-full w-48 h-48 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-white mb-2">Karru Harin</h2>
          <p className="text-gray-300">Front-end Developer</p>
        </div>
        {/* Person 2 */}
        <div className="text-center">
          <img
            src={aditya}
            alt="Person 2"
            className="rounded-full w-48 h-48 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-white mb-2">Kuchana Aditya</h2>
          <p className="text-gray-300">Front-end Developer</p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default AboutUs;
