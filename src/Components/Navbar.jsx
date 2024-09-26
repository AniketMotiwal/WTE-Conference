import React from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg">
        <div className="container mx-auto flex justify-center items-center py-4">
          <div className="flex space-x-10">
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
