import React from 'react';
import Hero from '../Hero/Hero';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='mx-5 md:mx-0'>
        <HomeServices />
      </div>
    </div>
  );
};

export default Home;