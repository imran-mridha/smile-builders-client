import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { FaStar } from "react-icons/fa";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};


const AddReview = ({ service,handleShowReview }) => {

  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  console.log(rating);

  const handleClick = value => {
    setRating(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const { _id } = service;
  const { user } = useContext(AuthContext)

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
      rating,
      email: user?.email,
      message
    }

    fetch('https://smile-builders-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          handleShowReview(_id)
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
        <div className="mb-1 sm:mb-2 flex gap-3">
          <div style={styles.container}>
            <h2 className='text-xl'> Feel Free Add Ratings </h2>
            <div className='my-3' style={styles.stars}>
              {stars.map((_, index) => {
                return (
                  <FaStar
                    key={index}
                    size={24}
                    onClick={() => handleClick(index + 1)}
                    onMouseOver={() => handleMouseOver(index + 1)}
                    onMouseLeave={handleMouseLeave}
                    color={(hoverValue || rating) > index ? colors.orange : colors.grey}
                    style={{
                      marginRight: 10,
                      cursor: "pointer"
                    }}
                  />
                )
              })}
            </div>


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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  }
};

export default AddReview;