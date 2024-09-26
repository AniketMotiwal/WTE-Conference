import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg">
      <div className="container mx-custom-auto flex justify-between items-center py-4">
          {/* Hamburger Icon for Mobile Screens with text */}
          <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-white text-3xl" />
            ) : (
              <FaBars className="text-white text-3xl" />
            )}
            <span className="text-white font-semibold ml-2"> WTE- Conference</span> {/* Added text here */}
          </div>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-20">
            {['/', '/About', '/Registration', '/How to Reach', '/Speakers', '/Schedule', '/Contact'].map((path, index) => (
              <a
                key={index}
                href={path}
                className="relative text-white font-semibold text-3xl tracking-wider hover:text-white hover:underline transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <span className="relative z-10">{path === '/' ? 'Home' : path.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-white opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out rounded-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-green-400 to-teal-500">
          <div className="flex flex-col items-center">
            {['/', '/About', '/Registration', '/How to Reach', '/Speakers', '/Schedule', '/Contact'].map((path, index) => (
              <a
                key={index}
                href={path}
                className="text-white font-semibold text-2xl my-2 hover:text-white hover:underline transition-all duration-500 ease-in-out"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
              >
                {path === '/' ? 'Home' : path.slice(1).replace(/([A-Z])/g, ' $1')}
              </a>
            ))}
          </div>
        </div>
      )}

      {isHomePage && (
        <div className="bg-blue-800 text-white p-6">
          <h1 className="text-3xl font-bold text-center">
            International Symposium on Transforming Waste Management: Circular Economy & Energy Sustainability
          </h1>
        </div>
      )}
    </>
  );
};

export default Navbar;
