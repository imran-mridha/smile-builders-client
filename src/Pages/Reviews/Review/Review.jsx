import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Review = ({ review, handleDeleteReview }) => {
  const { _id, image, message, name,date } = review;


  return (
    <div className='bg-gray-100 p-5 lg:p-10'>
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        <p className='italic text-lg text-gray-500 mb-10'>{message}</p>
        <div className='text-6xl text-yellow-400 hidden md:flex'>
          <FaQuoteRight />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-5 justify-between items-center'>
        <div className='flex items-center'>
          <img className='w-16 h-16 rounded-full mr-3' src={image} alt="" />
          <div className='text-gray-600'>
            <p className='text-2xl only:'>{name}</p>
            <p>{date}</p>
          </div>
        </div>
        <div>
          <Link to={`/update-review/${_id}`}  className='border border-yellow-400 hover:bg-yellow-400 py-2.5 px-6 mr-2 rounded'>Edit</Link>
          <button onClick={() => handleDeleteReview((_id))} className='border border-yellow-400 bg-yellow-400 py-2 px-4 rounded'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Review;