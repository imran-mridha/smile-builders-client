import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceReview from '../ServiceReview/ServiceReview';
import './ServiceDetails.css';
import AddReview from '../../Reviews/AddReview/AddReview';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const service = useLoaderData();
  const { _id, image, name, price, description } = service;


  useEffect(() => {
    fetch(`http://localhost:5000/reviewsid?serviceId=${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [reviews, _id])

  return (
    <div className='mx-5 md:mx-0'>
      <div className='container mx-auto my-20'>
        <div className='lg:w-9/12 mx-auto text-gray-600'>
          <div className=''>
            <div className='flex justify-between items-center uppercase font-semibold mb-5'>
              <p className='text-4xl'>{name}</p>
              <p className='text-3xl'>Price: ${price}</p>
            </div>
            <img className='rounded-lg w-full' src={image} alt="" />
            <p className='mt-5'>{description}</p>
          </div>
          <div className='mt-10'>
            {
              user?.uid ? <AddReview service={service}></AddReview>
                :
                <div className='text-center'>
                  <p className='text-3xl uppercase'>Please Sign In first for providing review
                  </p>
                  <Link to='/login'>
                    <button className='border py-2 px-6 border-yellow-500 hover:bg-yellow-500 rounded hover:text-white duration-200 mt-3 font-semibold'>Sign In</button>
                  </Link>
                </div>
            }
          </div>
          <div className='my-10'>
            <h2 className='text-4xl text-gray-600'>Reviews</h2>
            <div className='mt-10'>
              {
                reviews?.map(review => <ServiceReview key={review._id} review={review} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;