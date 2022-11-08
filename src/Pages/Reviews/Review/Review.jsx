import React from 'react';
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ review }) => {
  const { image, message,name } = review
  return (
    <div className='bg-gray-100 p-10'>
      <div className='flex justify-between gap-10'>
        <p className='italic text-lg text-gray-500 mb-10'>{message}</p>
        <div className='text-6xl text-yellow-400'>
          <FaQuoteRight />
        </div>
      </div>
      <div className='flex items-center'>
        <img className='w-20 h-20 rounded-full mr-3' src={image} alt="" />
        <div className='text-gray-600'>
          <p className='text-2xl only:'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;