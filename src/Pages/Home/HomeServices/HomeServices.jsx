import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';

const HomeServices = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
    fetch('https://smile-builders-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='my-20'>
      <div className='mb-10 text-center'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl uppercase font-semibold text-gray-600'>featured services</h2>
        <hr className='w-1/6 mx-auto mt-3 border-2 border-yellow-400' />
        <p className='lg:w-4/12 mx-auto mt-5 text-gray-500'>SmileBuilders is equipped to handle all your dental needs, from a regular cleaning to a full-mouth reconstruction.</p>
      </div>
      <div data-aos="zoom-in" className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map(service => <Service key={service._id} service={service} />)
        }
      </div>
      <div className='mt-20 text-center'>
      <Link to='/services'><button className='border py-2 px-4 text-xl font-semibold border-yellow-500 hover:bg-yellow-500 hover:text-white uppercase duration-200 rounded'>See All Services</button></Link>
      </div>
    </div>
  );
};

export default HomeServices;