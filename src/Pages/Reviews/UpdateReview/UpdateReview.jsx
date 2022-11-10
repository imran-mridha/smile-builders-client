import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateReview = () => {
  const navigate = useNavigate()
  const preReview = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleUpdateRivew = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;

    const review = {
      message
    }

    console.log(message);

    fetch(`https://smile-builders-server.vercel.app/reviews/${preReview._id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Review Update Success!!', { autoClose: 500 });
          navigate('/reviews')
        }
      })
      .catch(err => toast.error(err.message, { autoClose: 500 }))
  }

  return (
    <div className='w-11/12 md:9/12 lg:w-6/12 mx-auto border border-yellow-400 my-20 p-10 shadow-lg rounded-lg'>
      <h2 className='text-4xl text-gray-600 mb-5 border-b-2 border-yellow-400 w-60 pb-2'>Update Review</h2>
      <form onSubmit={handleUpdateRivew}>
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
              type="email"
              readOnly
              defaultValue={user?.email}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
              name="email"
            />
          </div>
        </div>
        <div className="mb-1 sm:mb-2">
          <textarea name="message" id="" cols="30" rows="10" defaultValue={preReview?.message} placeholder='Your Review...' className="flex-grow w-full h-40 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline pt-3"></textarea>
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-xl transition duration-200 rounded shadow-md  border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:shadow-outline focus:outline-none uppercase"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;