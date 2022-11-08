import React, { useContext, useEffect, useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import ServiceReview from '../ServiceReview/ServiceReview';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { user,logOut } = useContext(AuthContext);
  // const [value, onChange] = useState(new Date());
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
    const date = form.date.value;

    const review = {
      service_id: _id,
      name,
      image,
      date,
      email: user?.email,
      message
    }

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer, ${localStorage.getItem('smile-token')}`
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
    fetch(`http://localhost:5000/reviews?service_id=${_id}`, {
      headers: {
        authorization: `Bearer, ${localStorage.getItem('smile-token')}`
      }
    })
    .then(res => {
      console.log(res.stutus);
      if (res.status === 401 || res.status === 403) {
         logOut()
      }
      return res.json();

    })
    .then(data => {
      setReviews(data);
    })
    .catch(err => console.error(err))

  }, [_id, reviews])


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
              user?.uid ?
                <div>
                  <h2 className='text-4xl text-gray-600 mb-5'>Leave a Review</h2>
                  <form onSubmit={handleAddRivew}>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-5'>
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
                          type="email"
                          defaultValue={user?.email}
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                          name="email"
                        />
                      </div>
                      {/* <div className="mb-1 sm:mb-2 react-datetime-picker__wrapper">
                        <DateTimePicker className=" flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline" name='date' onChange={onChange} value={value} />
                      </div> */}
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <textarea name="message" id="" cols="30" rows="10" placeholder='Your Review...' className="flex-grow w-full h-40 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline pt-3"></textarea>
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