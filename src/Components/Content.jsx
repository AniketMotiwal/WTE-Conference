import React from 'react';

const Content = () => {
  return (
    <div className="flex p-6 bg-background rounded-lg shadow-lg space-x-4">
      {/* Left Section */}
      <div className="flex-1 pr-4  rounded-lg p-4">
        <div className="space-y-4"> {/* Increased space between buttons */}
          {/* Anchor tag added around the button content */}
          <a href="/AbstractSubmisssion" className="block">
            <button className="w-full bg-blue-800 text-white text-xl px-10 py-3 rounded border-2 border-blue-800 font-bold transition duration-300 hover:animate-fade-in">
              Abstract Submission
            </button>
          </a>

          <button className="w-full bg-blue-800 text-white text-xl px-10 py-3 rounded border-2 border-blue-800 font-bold transition duration-300 hover:animate-fade-in">
            Full Paper Submission
          </button>

          <button className="w-full bg-blue-800 text-white text-xl px-10 py-3 rounded border-2 border-blue-800 font-bold transition duration-300 hover:animate-fade-in">
            Full Paper Template
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 pl-4 animate-fade-in">
        <h3 className="text-xl font-semibold text-primary mt-6">Symposium Themes:</h3>
        <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
          <li className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-3xl">Sustainable Practices: Advocating for a Greener Future</li>
          <li className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-3xl">Circular Economy: Resource Efficiency for Sustainable Growth</li>
          <li className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-3xl">Innovative Technologies: Showcasing Science in Renewable Energy</li>
          <li className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-3xl">Knowledge Exchange: Fostering Interdisciplinary Collaboration</li>
          <li className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-3xl">Policy Recommendations: Shaping the Future of Energy Integration</li>
          <li className="transition duration-300 transform hover:scale-105 hover:text-primary text-justify hover:text-3xl">Efficiency Collaboration: Strengthening Partnerships for Sustainable Tech</li>
        </ul>

        <p className="text-muted-foreground mt-4 font-bold text-primary transition duration-300 transform hover:scale-105 hover:text-secondary hover:text-3xl">
          This Symposium also will include invited talks by prominent researchers, technical sessions, and group discussions in the above-mentioned areas. All the accepted papers will be published in the Conference proceedings.
        </p>
      </div>
    </div>
  );
};

export default Content;
