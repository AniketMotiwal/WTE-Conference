import React from 'react';
import image1 from '../assets/Dr rk-Photoroom.png';
import image2 from '../assets/vikram vishal-Photoroom.png';
import image3 from '../assets/Prof. Meenesh-Photoroom.png';

const Speakers = () => {
  return (
    <div className="container mx-auto py-48">
      <h2 className="text-5xl font-bold text-center mb-1">Speakers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center transition-opacity duration-300 hover:opacity-80">
          <img className="w-full h-64 object-fit rounded-lg" src={image1} alt="Dr. R K Malhotra" />
          <h3 className="text-lg font-semibold mt-4">Dr. R K Malhotra</h3>
          <p className="text-muted-foreground text-center">Director & Co-founder, Carbon U Turn Pvt. Ltd. President Hydrogen Association of India. Visiting Professor at IIT Roorkee.</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center transition-opacity duration-300 hover:opacity-80">
          <img className="w-full h-64 object-scale-down rounded-lg mb-4" src={image2} alt="Prof. Vikram Vishal" />
          <h3 className="text-lg font-semibold mt-4">Prof. Vikram Vishal</h3>
          <p className="text-muted-foreground text-center">Professor, Indian Institute of Technology Bombay, Mumbai.</p>
        </div>

        <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center transition-opacity duration-300 hover:opacity-80">
          <img className="w-full h-64 object-contain rounded-lg" src={image3} alt="Prof. Meenesh R. SINGH" />
          <h3 className="text-lg font-semibold mt-4">Prof. Meenesh R. SINGH</h3>
          <p className="text-muted-foreground text-center">Department of Chemical Engineering, University of Illinois Chicago.</p>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
