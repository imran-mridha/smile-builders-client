import React from 'react';
import { FaThumbsUp,FaAward,FaTeeth } from "react-icons/fa";
import CountUp from 'react-countup';

const Status = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div data-aos="fade-right" className='text-center'>
          <FaThumbsUp className='text-5xl w-6/12 mx-auto text-yellow-400' />
          <div className='text-2xl font-semibold mt-3 text-gray-600'>
            <CountUp delay={0} end={4500}>450+</CountUp>
            <p>Happy Clints</p>
          </div>
        </div>
        <div data-aos="fade-up" className='text-center'>
          <FaAward className='text-5xl w-6/12 mx-auto text-yellow-400' />
          <div className='text-2xl font-semibold mt-3 text-gray-600'>
            <CountUp delay={0} end={1500}>1500+</CountUp>
            <p>Successful Cases</p>
          </div>
        </div>
        <div data-aos="fade-left" className='text-center'>
          <FaTeeth className='text-5xl w-6/12 mx-auto text-yellow-400' />
          <div className='text-2xl font-semibold mt-3 text-gray-600'>
            <CountUp delay={0} end={10}>10+</CountUp>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;