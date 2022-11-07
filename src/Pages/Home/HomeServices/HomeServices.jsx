import React, { useEffect, useState } from 'react';
import Service from '../../Services/Service/Service';

const HomeServices = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='mx-4 md:mx-0 my-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {
          services.map(service => <Service key={service._id} service={service} />)
        }
      </div>
    </div>
  );
};

export default HomeServices;