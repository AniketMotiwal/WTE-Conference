import React from 'react';

const HowReach = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-900 text-white py-16 px-4 relative overflow-hidden mb-8">
        <div className="absolute inset-0 bg-blue-800 rounded-b-[50%] h-[200%] -top-[100%]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">How To Reach</h1>
        </div>
      </header>
      <div className="max-w-2xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6 hover:text-blue-500 transition-colors duration-300">
          How to Reach IIT Roorkee
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 hover:text-blue-400 transition-colors duration-300 py-6 hover:text-3xl">
          Roorkee is well connected to Delhi by rail and road. It is situated on National Highways 58 and 73 and is an important research hub as well. Some trains, which are convenient for traveling
          between Delhi and Roorkee are New Delhi-Dehradun Express and Dehradun-New Delhi-Dehradun Jan Shatabdi Express. The nearest airport is located at Dehradun, Uttarakhand. New Delhi is the
          preferred airport. National Highway 58 from New Delhi is one of the higher reaches of the Himalayas, and those who are traveling to Roorkee, therefore, will be connected to the major cities on
          the highway road. There are frequent bus services to this place from the Maharana Pratap Inter State Bus Terminal (ISBT) Delhi.
        </p>
        <h3 className="text-xl font-semibold mb-4 hover:text-3xl">Distance Information</h3>
        <p className="text-muted-foreground leading-relaxed mb-4 hover:text-3xl">
          The distance from Delhi to IIT Roorkee is approximately 180 km, which takes around 6-7 hours by road, depending on traffic conditions.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4 hover:text-3xl">
          The distance from Dehradun to IIT Roorkee is about 35 km, and it usually takes around 1-1.5 hours by road.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8 hover:text-3xl">
          For detailed directions, we have a complete road map available from Dehradun Airport to IIT Roorkee and from Delhi to IIT Roorkee.
        </p>

        {/* Google Map Embed */}
        <h3 className="text-xl font-semibold mb-4">Find IIT Roorkee on Google Maps</h3>
        <iframe
          className="w-full h-96 mb-8 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.1111099751534!2d77.8679767152935!3d29.88053927923307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb3650bfe37a7%3A0xa9d19b15af050467!2sIndian%20Institute%20Of%20Technology%20Roorkee!5e0!3m2!1sen!2sin!4v1638368563044!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Map of IIT Roorkee"
        ></iframe>

      </div>
    </div>
  );
}

export default HowReach;
