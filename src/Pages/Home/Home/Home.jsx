import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='mx-5 md:mx-0'>
        <About />
        <HomeServices />
      </div>
    </div>
  );
};

export default Home;