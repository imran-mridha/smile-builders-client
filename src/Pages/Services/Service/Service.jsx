import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, image, name, price, description } = service;
  return (
    <div className='border rounded p-4 shadow-lg'>
      <img className='h-80 w-full rounded-lg' src={image} alt="" />
      <div className='text-3xl'>
        <p className='my-3 font-semibold text-gray-500'>{name}</p>
        <p className='text-gray-500 font-semibold'>Price: <span className='text-yellow-400'>${price}</span> </p>
        <p className='text-lg my-3 text-gray-500'>{description.length > 100 ? description.slice(0, 100) + '...' : ''}</p>
      </div>
      <div>
        <Link to={`/services/${_id}`}>
          <button className='border py-2 px-6 text-gray-600 border-yellow-400 rounded hover:bg-yellow-500 hover:text-white duration-200 w-full uppercase text-xl font-semibold'>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;