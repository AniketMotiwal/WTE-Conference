import React from 'react';

const Errorpage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 animate-pulse">404</h1>
        <p className="text-2xl mt-4 text-gray-700">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-500">The page you're looking for doesn't exist.</p>
        <a href="/" className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Errorpage;
