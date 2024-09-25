import React from 'react';

const Symposium = () => {
  return (
    <div className="bg-indigo-900 text-white p-6 rounded-lg shadow-lg opacity-0 animate-fade-in transition-opacity duration-1000">
      <h2 className="text-2xl font-bold mb-4 hover:text-3xl">About the Symposium</h2>

      <p className="relative mt-4 text-lg group transition-all duration-300 hover:text-yellow-500 hover:text-3xl">
        <span className="transition-colors duration-300 group-hover:text-yellow-500">
          The "International Symposium on Transforming Waste Management: Circular Economy and Energy Sustainability" aims to address the pressing social and environmental challenges associated with
          waste management. This symposium envisions fostering a comprehensive understanding of sustainable waste management practices and their role in promoting a circular economy. It seeks to
          facilitate knowledge exchange and collaborative efforts to enhance solutions for waste reduction, resource efficiency, and energy sustainability by bringing together stakeholders, experts,
          practitioners, industry leaders, and community stakeholders.
        </span>
        
      </p>

      <p className="relative mt-4 text-lg group transition-all duration-300 hover:text-yellow-500 hover:text-3xl">
        <span className="transition-colors duration-300 group-hover:text-yellow-500">
          A key focus of the symposium is to highlight the gender dynamics in waste management. Recognizing that women play a significant role in waste management both at household and community levels,
          the symposium will explore their experiences and examine their participation in decision-making processes, addressing gender inequalities and promoting inclusive practices. The symposium aims
          to create a more equitable and sustainable waste management sector.
        </span>
        
      </p>

      <p className="relative mt-4 text-lg group transition-all duration-300 hover:text-yellow-500 hover:text-3xl">
        <span className="transition-colors duration-300 group-hover:text-yellow-500">
          Additionally, the symposium will explore the utilization of agricultural byproducts, such as cow dung, in waste-to-energy initiatives, demonstrating how these resources can be transformed into
          valuable energy sources. Overall, the symposium will contribute to the development of policies and practices that not only enhance environmental sustainability but also promote social equity
          and gender inclusivity in waste management.
        </span>
      
      </p>
    </div>
  );
}

export default Symposium;
