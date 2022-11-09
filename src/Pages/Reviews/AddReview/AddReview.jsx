import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const AddReview = ({service}) => {
  const { _id} = service;
  const {user} = useContext(AuthContext)

  const handleAddRivew = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const time = new Date();
    const image = user?.photoURL;
    const message = form.message.value;
    const serviceName = form.serviceName.value;

    const review = {
      serviceId: _id,
      name,
      serviceName,
      image,
      time,
      email: user?.email,
      message
    }

    fetch('https://smile-builders-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        // authorization: `Bearer, ${localStorage.getItem('smile-token')}`
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

  }
  return (
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
              readOnly
              type="email"
              defaultValue={user?.email}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
              name="email"
            />
          </div>
          <div className="mb-1 sm:mb-2">
            <input
              required
              readOnly
              type="text"
              defaultValue={service?.name}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
              name="serviceName"
            />
          </div>
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
  );
};

export default AddReview;