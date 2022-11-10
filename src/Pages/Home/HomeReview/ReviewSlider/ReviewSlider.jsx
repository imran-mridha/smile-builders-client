import React from 'react';
import { FaQuoteRight,FaStar } from "react-icons/fa";
import './ReviewSlider.css'

const ReviewSlider = ({reviewSlide}) => {
  const {image,name,message,rating} = reviewSlide;
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
        <div className='flex items-center mt-5'>
          <p className='mr-3 text-gray-600'>Rating: </p>
          <p className='text-xl mr-1 font-bold text-yellow-400'>{rating}</p>
          <FaStar className='text-xl font-bold text-yellow-400' />
      </div>
      </div>
    </div>
  );
};

export default ReviewSlider;