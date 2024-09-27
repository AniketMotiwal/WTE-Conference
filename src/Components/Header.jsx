import React, { useEffect, useState } from 'react';
import iit from '../assets/iit.png';
import nseb from '../assets/nseb.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logoSize = isMobile ? 'h-20 w-20' : 'h-34 w-34'; // Set sizes based on screen type

  return (
    <div className="w-screen box-border overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 sm:p-0 bg-white no-extra-space">
      {/* IIT Roorkee Logo */}
      <img src={iit} alt="IIT Roorkee Logo" className={`${logoSize} object-fit ml-3` } />

      {/* Centered Text */}
      <div className="flex-1 text-center my-4 md:my-0 px-2">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-600 dark:text-blue-800">
          Indian Institute of Technology Roorkee
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium text-blue-600 dark:text-blue-800">
          &
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-6xl font-medium text-blue-600 dark:text-blue-800">
          Science and Engineering Research Board India
        </h2>
      </div>

      {/* SERB Logo */}
      <img src={nseb} alt="SERB Logo" className={`${logoSize} object-contain mr-10`} />
    </div>
  );
};

export default Header;
