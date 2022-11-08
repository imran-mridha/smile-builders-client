import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const service = useLoaderData();
  console.log(service);
  const { _id, image, name, price, description } = service;
  return (
    <div className='mx-5 md:mx-0'>
      <div className='container mx-auto my-20'>
        <div className='w-9/12'>
          <img src={image} alt="" />
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;