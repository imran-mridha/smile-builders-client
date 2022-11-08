import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import ServiceReview from '../ServiceReview/ServiceReview';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const service = useLoaderData();
  const { _id, image, name, price, description } = service;

  const handleAddRivew = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const image = user?.photoURL;
    const message = form.message.value;

    const review = {
      service_id: _id,
      name,
      image,
      email: user?.email,
      message
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Review Submit Success!!', { autoClose: 500 });
          form.reset();
        }
      })
      .catch(err => toast.error(err.message, { autoClose: 500 }))

    console.log(name, image, message);
  }

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service_id=${_id}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
      .catch(err => toast.error(err.messege, { autoClose: 500 }))
  }, [_id])


  return (
    <div className='mx-5 md:mx-0'>
      <div className='container mx-auto my-20'>
        <div className='w-9/12 mx-auto text-gray-600'>
          <div className=''>
            <p className='text-4xl mb-5'>{name}</p>
            <img className='rounded-lg w-full' src={image} alt="" />
            <p className='mt-5'>{description}</p>
          </div>
          <div className='my-10'>
            <h2 className='text-4xl text-gray-600'>Reviews</h2>
            <div className='mt-10'>
              {
                reviews.map(review => <ServiceReview key={review._id} review={review} />)
              }
            </div>
          </div>
          <div>
            {
              !user ? <div><p>Please Login first</p></div>
                :
                <div>
                  <h2 className='text-4xl text-gray-600 mb-5'>Leave a Review</h2>
                  <form onSubmit={handleAddRivew}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                      <div className="mb-1 sm:mb-2">
                        <input
                          required
                          type="text"
                          readOnly
                          defaultValue={user?.displayName}
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                          name="name"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <input
                          required
                          type="time"
                          readOnly
                          defaultValue={user?.displayName}
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                          name="name"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <input
                          required
                          type="email"
                          defaultValue={user?.email}
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <textarea name="message" id="" cols="30" rows="10" placeholder='Your Review...' className="flex-grow w-full h-60 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline pt-3"></textarea>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-xl transition duration-200 rounded shadow-md  border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:shadow-outline focus:outline-none uppercase"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;