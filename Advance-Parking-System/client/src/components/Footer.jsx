import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-extrabold">LAB-Parking</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <a href="/" className="hover:text-blue-300 transition duration-300">
            Home
          </a>
          <a
            href="/about"
            className="hover:text-blue-300 transition duration-300"
          >
            About Us
          </a>
          <a
            href="/services"
            className="hover:text-blue-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:text-blue-300 transition duration-300"
          >
            Contact
          </a>
          <a
            href="/login"
            className="hover:text-blue-300 transition duration-300"
          >
            Login
          </a>
        </nav>

        {/* Contact Information */}
        <div className="mt-4 md:mt-0">
          <p>Contact Us: (123) 456-7890</p>
          <p>Email: info@lab-parking.com</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <i className="fab fa-facebook-f"></i>{" "}
            {/* Font Awesome icon for Facebook */}
          </a>
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <i className="fab fa-twitter"></i>{" "}
            {/* Font Awesome icon for Twitter */}
          </a>
          <a href="#" className="hover:text-blue-300 transition duration-300">
            <i className="fab fa-instagram"></i>{" "}
            {/* Font Awesome icon for Instagram */}
          </a>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center mt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} LAB-Parking. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
