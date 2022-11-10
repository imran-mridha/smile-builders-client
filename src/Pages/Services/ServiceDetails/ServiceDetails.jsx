import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServiceReview from '../ServiceReview/ServiceReview';
import AddReview from '../../Reviews/AddReview/AddReview';
import useTitle from '../../../hooks/useTitle';

const ServiceDetails = () => {
  useTitle('Service')
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const service = useLoaderData();
  const { _id, image, name, price, description } = service;


  useEffect(() => {
    fetch(`https://smile-builders-server.vercel.app/reviewsid?serviceId=${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [_id])

  const handleShowReview = (id) => {
    fetch(`https://smile-builders-server.vercel.app/reviewsid?serviceId=${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }

  return (
    <div className='mx-5 md:mx-0'>
      <div className='container mx-auto my-20'>
        <div className='lg:w-9/12 mx-auto text-gray-600'>
          <div className=''>
            <div className='flex justify-between items-center uppercase font-semibold mb-5'>
              <p className='text-4xl'>{name}</p>
              <p className='text-3xl'>Price: ${price}</p>
            </div>
            <img className='rounded-lg w-full h-96 object-cover' src={image} alt="" />
            <p className='mt-5'>{description}</p>
          </div>
          <div>
          </div>
          <div className='mt-10'>
            {
              user?.uid ? <AddReview service={service} handleShowReview={handleShowReview}></AddReview>
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
            {
              reviews?.length !== 0 ?
                <>
                  <h2 className='text-2xl text-gray-600'>Total Review ({reviews.length})</h2>
                  <div className='mt-10'>
                    {
                      reviews?.map(review => <ServiceReview key={review._id} review={review} />)
                    }
                  </div>
                </>
                :
                <p className='text-4xl text-gray-600 text-center'>No Review Available</p>
            }
          </div>

        </div>

      </div>
    </div>
  );
};

export default ServiceDetails;