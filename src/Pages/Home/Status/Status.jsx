import React from 'react';
import { FaThumbsUp,FaAward,FaTeeth } from "react-icons/fa";

const Status = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='text-center'>
          <FaThumbsUp className='text-5xl w-6/12 mx-auto text-yellow-400' />
          <div className='text-2xl font-semibold mt-3 text-gray-600'>
            <p>4500+</p>
            <p>Happy Clints</p>
          </div>
        </div>
        <div className='text-center'>
          <FaAward className='text-5xl w-6/12 mx-auto text-yellow-400' />
          <div className='text-2xl font-semibold mt-3 text-gray-600'>
            <p>15,600+</p>
            <p>Successful Cases</p>
          </div>
        </div>
        <div className='text-center'>
          <FaTeeth className='text-5xl w-6/12 mx-auto text-yellow-400' />
          <div className='text-2xl font-semibold mt-3 text-gray-600'>
            <p>10+</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;