import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header'; 
import Navbar from '../src/Components/Navbar';
import Hero from '../src/Components/Hero';
import Content from '../src/Components/Content';
import Symposuim from '../src/Components/Symposuim';
import Abstract from '../src/Components/Abstract'; 
import Card from '../src/Components/Card';
import Footer from '../src/Components/Footer';
import Registration from '../src/Pages/Registration'; // Ensure this component exists
import AboutUs from '../src/Pages/Aboutus'; // Ensure this component exists
import Contact from '../src/Pages/Contact'; // Ensure this component exists
import HowReach from'../src/Pages/HowReach';
import Schedule from '../src/Pages/Schedule';
import Speakers   from '../src/Pages/Speakers';
import AbstractSubmisson from '../src/Pages/AbstractSubmisson';
import Errorpage from '../src/Pages/Errorpage'
const App = () => {
  return (
    <Router>
      <div>
        {/* Common components across all routes */}
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Content />
              <Symposuim />
              <Abstract />
              <Card />
            </>
          } />
          {/* Pages */}
          
          <Route path="/registration" element={<Registration />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/How to Reach" element={<HowReach />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/AbstractSubmisssion" element={<AbstractSubmisson/>}/>
             {/* Catch-all for invalid URLs */}
             <Route path="*" element={<Errorpage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
