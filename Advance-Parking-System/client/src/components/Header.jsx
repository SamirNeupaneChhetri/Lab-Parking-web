import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <span className="text-4xl font-extrabold text-white tracking-wide transition-transform transform hover:scale-110">
            LAB-Parking
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-8">
          <Link
            to="/"
            className="text-gray-200 font-medium hover:text-white transition duration-300 transform hover:translate-y-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-200 font-medium hover:text-white transition duration-300 transform hover:translate-y-1"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-gray-200 font-medium hover:text-white transition duration-300 transform hover:translate-y-1"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-200 font-medium hover:text-white transition duration-300 transform hover:translate-y-1"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="text-gray-200 font-medium hover:text-white transition duration-300 transform hover:translate-y-1"
          >
            Login
          </Link>
        </nav>

        {/* Call to Action Button */}
        <div>
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Reserve a Spot
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
