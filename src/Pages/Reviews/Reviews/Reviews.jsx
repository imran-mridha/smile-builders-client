import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const Reviews = () => {
  const {user} = useContext(AuthContext)
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
      // headers: {
      //   authorization: `Bearer, ${localStorage.getItem('genius-token')}`
      // }
    })
      .then(res => {
        console.log(res.stutus);
        if (res.status === 401 || res.status === 403) {
          // return logOut()
        }
        return res.json();
        
      })
      .then(data => {
        setReviews(data);
      })
      .catch(err => console.error(err))
  }, [user?.email])
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-0'>
      {
        reviews.map(review => <Review key={review._id} review={review} />)
      }
    </div>
    </div>
  );
};

export default Reviews;