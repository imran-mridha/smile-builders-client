import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Review = ({ review, handleDeleteReview }) => {
  const { _id, image, message, name, date, serviceName, rating } = review;

  return (
    <div className='bg-gray-100 p-5 lg:p-10 shadow-lg'>
      <h2 className='text-2xl mb-3 text-gray-600'>{serviceName}</h2>
      <div className='flex items-center'>
          <p className='mr-3 text-gray-600'>Rating: </p>
          <p className='text-xl mr-1 font-bold text-yellow-400'>{rating}</p>
          <FaStar className='text-xl font-bold text-yellow-400' />
      </div>
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
          <Link to={`/update-review/${_id}`} className='border border-yellow-400 bg-yellow-400 py-2.5 px-6 mr-2 rounded'>Edit</Link>
          <button onClick={() => handleDeleteReview((_id))} className='border border-yellow-400 hover:bg-yellow-400 py-2 px-4 rounded'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Review;