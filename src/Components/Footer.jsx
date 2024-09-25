import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[rgb(10,24,40)] text-white p-6"> {/* Updated background color and increased padding */}
      <div className="flex justify-between">
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
            <a href="https://www.iitr.ac.in/wteconference" className="text-primary underline">
              https://www.iitr.ac.in/wetconference
            </a>
          </p>
        </div>
        <div className="flex-1 text-center">
          <h3 className="font-bold">Dr. Vishwajeet, Co-Convenor</h3>
          <p className="text-muted-foreground">9045065328</p>
          <p className="text-muted-foreground">vishwajeet.rj@esit.iitr.ac.in</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
