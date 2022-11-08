import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import HomeServices from '../HomeServices/HomeServices';
import Status from '../Status/Status';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='mx-5 md:mx-0'>
        <About />
        <HomeServices />
        <Status />
      </div>
    </div>
  );
};

export default Home;