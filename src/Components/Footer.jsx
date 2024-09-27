import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Import arrow icon from React Icons

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show the arrow when scrolled down a certain amount
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[rgb(10,24,40)] text-white p-6 md:p-10 relative">
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex-1 text-center">
          <a href="https://iitr.ac.in/~ME/Akshay_Dvivedi" className="font-bold">
            <h3>Prof. Akshay Dwivedi</h3>
          </a>
          <p className="text-muted-foreground">+91 9411716136</p>
          <p className="text-muted-foreground">akshay.dwivedi@me.iitr.ac.in</p>
        </div>

        <div className="flex-1 text-center">
          <h3 className="font-bold">For Registration and for more Information Visit:</h3>
          <p className="text-muted-foreground">
            <a href="#" className="text-primary underline">
              {/* Add relevant registration link */}
            </a>
          </p>
        </div>

        <div className="flex-1 text-center">
          <h3 className="font-bold">Dr. Vishwajeet, Co-Convenor</h3>
          <p className="text-muted-foreground">+91 9045065328</p>
          <p className="text-muted-foreground">vishwajeet.rj@esit.iitr.ac.in</p>
        </div>
      </div>

      {/* Back-to-top arrow with dark color and slide-in effect */}
      {showArrow && (
        <div
          className={`fixed bottom-6 right-6 p-3 rounded-full cursor-pointer transition-transform duration-500 ease-out bg-gray-800 text-white hover:bg-gray-700 ${
            showArrow ? 'translate-y-0' : 'translate-y-20'
          }`}
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-white" />
        </div>
      )}
    </div>
  );
};

export default Footer;
