import React from 'react';

const Abstract = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
      <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 hover:text-3xl">ABSTRACTS INVITED</h2>
        <ul className="list-disc list-inside hover:text-3xl">
          <li>Waste Characterization & Segregation</li>
          <li>Biochemical and Thermochemical Conversion</li>
          <li>Clean Energy Technologies</li>
          <li>Generation of Green Hydrogen</li>
          <li>Energy Auditing</li>
          <li>Waste Management and Policies</li>
          <li>Waste Heat Recovery in Solar Devices</li>
          <li>Environmental Protection</li>
          <li>Low-cost Technologies</li>
          <li>Sustainable Energy Management</li>
          <li>Socio-economic Aspect of Energy</li>
          <li>Circular Economy and Social Resilience</li>
          <li>Social Equity in Sustainable Practices</li>
          <li>Policy Development for Social Responsibility</li>
        </ul>
      </div>
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 transition-all duration-500 hover:bg-purple-700">
        <h2 className="text-2xl font-bold mb-4 hover:text-3xl">DEADLINE FOR ABSTRACT SUBMISSION</h2>
        <p className="text-lg hover:text-3xl">
          <strong>Abstract Submission Deadline:</strong> September 30, 2024
        </p>
        <p className="text-lg hover:text-3xl">
          <strong>Notification of Acceptance:</strong> October 15, 2024
        </p>
        <p className="text-lg hover:text-3xl">
          <strong>Registration Deadline:</strong> November 5, 2024
        </p>
        <h3 className="font-bold mt-4 text-xl hover:text-3xl">Registration Fees for presenters:</h3>
        <p className="text-lg hover:text-xl">For Indians: INR 1500</p>
        <p className="text-lg hover:text-xl">For Foreigners: USD 200</p>
        <h3 className="font-bold mt-4 text-xl hover:text-3xl">Registration Fees for Attendees:</h3>
        <p className="text-lg hover:text-xl">For Indians: INR 1000</p>
        <p className="text-lg hover:text-xl">For Foreigners: USD 150</p>
      </div>
    </div>
  );
};

export default Abstract;
