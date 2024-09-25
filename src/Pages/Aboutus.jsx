import React from 'react';

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 rounded-b-[50%] h-[200%] -top-[100%]"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 hover:text-3xl">Symposium Overview</h2>
          <p className="text-gray-700 mb-4 text-xl text-justify hover:text-3xl">
            The transition towards a sustainable future necessitates rethinking how we manage waste and utilize resources. The symposium titled
            “International Symposium on Transforming Waste Management: Circular Economy and Energy Sustainability” seeks to address these challenges by promoting innovative solutions and fostering collaboration among key stakeholders.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 hover:text-3xl">SERB</h2>
          <p className="text-gray-700 mb-4 text-xl text-justify hover:text-3xl">
            One of the most notable developments in the S&T sector in the XI Plan has been the setting up of the Science and Engineering Research Board (SERB) through an Act of Parliament, viz. the Science and Engineering Research Board Act, 2008. Promoting basic research in Science and Engineering and to provide financial assistance to persons engaged in such research, academic institutions, research and development laboratories, industrial concerns and other agencies for such research and for matters connected therewith or incidental thereto are the primary and distinctive mandate of the Board.
          </p>
          <p className="text-gray-700 text-xl hover:text-3xl">
            <a href="https://www.serbonline.in/SERB/HomePage" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Read More</a>
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 hover:text-3xl">IITR</h2>
          <p className="text-gray-700 mb-4 text-xl text-justify hover:text-3xl">
            Indian Institute of Technology Roorkee (IIT Roorkee) is the oldest technical institute of the Indian subcontinent, established in 1847. Recognizing its yeoman contribution to the development of the country for over 100 years, this temple of learning was elevated to the status of a University, the first technical university in India, in 1949. The University of Roorkee was converted to IIT Roorkee by the Government of India on September 21, 2001, further elevating it to an institute of national importance.
          </p>
          <p className="text-gray-700 mb-4 text-xl text-justify hover:text-3xl">
            Over the years, it has built up and maintained an excellent academic reputation. Roorkee is considered to be the gateway to pilgrimage and places like Haridwar, Rishikesh, Mussoorie, etc. Roorkee is well connected by roads and located 180 km north of Delhi.
          </p>
          <p className="text-gray-700 text-xl text-justif hover:text-3xl">
            <a href="https://www.iitr.ac.in" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Read More</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Aboutus;
