import React, { useEffect, useState } from 'react';
import view1 from '../assets/iit banner.jpg';
import view2 from '../assets/iitviw.png';
import view3 from '../assets/iit night view.jpg';

const Hero = () => {
  const images = [
    {
      src: view1,
      alt: 'IIT Roorkee - Banner View',
    },
    {
      src: view2,
      alt: 'IIT Roorkee - Day View',
    },
    {
      src: view3,
      alt: 'IIT Roorkee - Night View',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide change
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(slideInterval);
  }, [images.length]);

  // Preload first image
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = images[0].src;
    link.as = 'image';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative bg-background dark:bg-zinc-800 h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            loading={index === 0 ? 'eager' : 'lazy'} // Preload the first image, lazy-load the others
            className="w-full h-full object-cover brightness-110" // Adjust brightness
          />
        </div>
      ))}

      {/* Text */}
      <div className="relative z-10 flex items-center justify-start h-full">
        <div className="p-8 bg-white dark:bg-zinc-900 bg-opacity-70 dark:bg-opacity-70 rounded-lg shadow-lg transform transition-all duration-1000 ease-in-out ml-4 sm:ml-8 md:ml-16 lg:ml-20 mr-4 sm:mr-8 md:mr-16 lg:mr-20">
          <h1
            className="text-3xl font-bold text-yellow-300 dark:text-yellow-400 animate-fadeIn"
          >
            EVENT ON:
            November 28th & 29th 2024
          </h1>
          <p
            className="text-3xl font-medium text-gray-900 dark:text-gray-200 animate-slideIn"
          >
            IIT Roorkee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
