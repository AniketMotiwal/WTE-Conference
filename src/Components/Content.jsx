import React from 'react';

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-background rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-4">
      {/* Left Section */}
      <div className="flex-1 pr-0 md:pr-4 rounded-lg p-4">
        <div className="space-y-4">
          <a href="/AbstractSubmisssion" className="block">
            <button className="w-full bg-blue-800 text-white text-lg md:text-xl px-8 md:px-10 py-2 md:py-3 rounded border-2 border-blue-800 font-bold transition duration-300 hover:animate-fade-in">
              Abstract Submission
            </button>
          </a>

          <button className="w-full bg-blue-800 text-white text-lg md:text-xl px-8 md:px-10 py-2 md:py-3 rounded border-2 border-blue-800 font-bold transition duration-300 hover:animate-fade-in">
            Full Paper Submission
          </button>

          <button className="w-full bg-blue-800 text-white text-lg md:text-xl px-8 md:px-10 py-2 md:py-3 rounded border-2 border-blue-800 font-bold transition duration-300 hover:animate-fade-in">
            Full Paper Template
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 pl-0 md:pl-4 animate-fade-in">
        <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6">Symposium Themes:</h3>
        <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
          {[
            "Sustainable Practices: Advocating for a Greener Future",
            "Circular Economy: Resource Efficiency for Sustainable Growth",
            "Innovative Technologies: Showcasing Science in Renewable Energy",
            "Knowledge Exchange: Fostering Interdisciplinary Collaboration",
            "Policy Recommendations: Shaping the Future of Energy Integration",
            "Efficiency Collaboration: Strengthening Partnerships for Sustainable Tech"
          ].map((theme, index) => (
            <li key={index} className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-lg md:hover:text-xl">
              {theme}
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground mt-4 font-bold text-primary transition duration-300 transform hover:scale-105 hover:text-secondary hover:text-2xl md:hover:text-3xl text-lg md:text-xl">
          This Symposium also will include invited talks by prominent researchers, technical sessions, and group discussions in the above-mentioned areas. All the accepted papers will be published in the Conference proceedings.
        </p>
      </div>
    </div>

    
  );
};

export default Content;
