import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Hero from '../Hero/Hero';
import HomeReview from '../HomeReview/HomeReview';
import HomeServices from '../HomeServices/HomeServices';
import Status from '../Status/Status';

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Hero />
      <div className='mx-5 md:mx-0'>
        <About />
        <HomeServices />
        <HomeReview />
        <Status />
      </div>
    </div>
  );
};

export default Home;