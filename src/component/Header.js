import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    /*
    Simple Header
    */
    <header className="bg-green-300 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://static.thenounproject.com/png/3704396-200.png" alt="logo" className="ml-4 w-30 h-10 mr-2" />
          <div className="text-black font-bold text-xl font-mono">Life.xyz</div>
        </div>
        <nav className="ml-4 mr-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-800 hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-gray-800 hover:text-white transition duration-300">
                News
              </Link>
            </li>

            <li>
              <Link to="/tracking" className="text-gray-800 hover:text-white transition duration-300">
                Tracking
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-800 hover:text-white transition duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/translate" className="text-gray-800 hover:text-white transition duration-300">
                Translate
              </Link>
            </li>
            <li>
              <Link to="/chatbot" className="text-gray-800 hover:text-white transition duration-300">
                Chatbot
              </Link>
            </li>
            <li>
              <Link to="/human" className="text-gray-800 hover:text-white transition duration-300">
                Human Detector
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-gray-800 hover:text-white transition duration-300">
                BMI Calculator
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;