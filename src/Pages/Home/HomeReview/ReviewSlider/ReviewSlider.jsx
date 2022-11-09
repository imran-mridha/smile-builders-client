import React from 'react';
import { FaQuoteRight,FaStar } from "react-icons/fa";

const ReviewSlider = ({reviewSlide}) => {
  const {image,name,message} = reviewSlide;
  return (
    <div className='p-5 border rounded-lg'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div className='mr-3'>
            <img className='w-12 h-12 rounded-full' src={image} alt="" />
          </div>
          <div>
            <p className='text-xl font-bold text-gray-500'>{name}</p>
          </div>
        </div>
        <div className='text-3xl text-yellow-400'>
          <FaQuoteRight></FaQuoteRight>
        </div>
      </div>
      <div className='my-5'>
        <p>
          {message}
        </p>
        <p className='flex mt-5 text-[#FF912C]'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </p>
      </div>
    </div>
  );
};

export default ReviewSlider;