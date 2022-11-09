import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);

  useTitle('Services')

  useEffect(() => {
    fetch('http://localhost:5000/all-services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='mx-4 md:mx-0 my-20'>
      <div className='mb-10 text-center'>
        <h2 className='text-4xl uppercase font-semibold text-gray-600'>Services</h2>
        <hr className='w-1/12 mx-auto mt-3 border-2 border-yellow-400' />
        <p className='w-4/12 mx-auto mt-5 text-gray-500'>SmileBuilders is equipped to handle all your dental needs, from a regular cleaning to a full-mouth reconstruction.</p>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.length !== 0 ?
            services.map(service => <Service key={service._id} service={service} />)
            :
            <div className='flex justify-center col-span-3 items-center'>
              <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div>
            </div>
        }
      </div>
    </div>
  );
};

export default Services;