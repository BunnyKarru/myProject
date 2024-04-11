import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-4 px-6 bg-blue-800 text-gray-300">
      <p>&copy; 2024 TraveLore</p>
      <Link to="/about" className="text-black hover:underline">About Us</Link>
    </footer>
  );
};

export default Footer;
