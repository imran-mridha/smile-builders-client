import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import useTitle from '../../../hooks/useTitle';
import { CirclesWithBar } from 'react-loader-spinner'

const Reviews = () => {
  useTitle('My Reviews')
  const { user, logOut } = useContext(AuthContext)
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!user?.email) {
      return;
    }
    fetch(`https://smile-builders-server.vercel.app/reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer, ${localStorage.getItem('smile-token')}`
      }
    })
      .then(res => {
        // if (res.status === 401 || res.status === 403) {
        //   return logOut()
        // }
        return res.json();

      })
      .then(data => {
        setLoading(false)
        setReviews(data);
      })
      .catch(err => console.error(err))
  }, [user?.email, logOut])

  const handleDeleteReview = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FACC15',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        fetch(`https://smile-builders-server.vercel.app/reviews/${id}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer, ${localStorage.getItem('smile-token')}`
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              toast.success('Delete Success!!', { autoClose: 500 })
              const remaining = reviews.filter(odr => odr._id !== id);
              setReviews(remaining)
            }
          })
      }
    })

  }
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-5 md:mx-0'>
        {
          loading ? <div className='h-screen flex col-span-2 justify-center items-center'>
            {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div> */}
            <CirclesWithBar
              height="100"
              width="100"
              color="#E6BE05"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
            />
          </div>
            :
            <>
              {
                reviews?.length !== 0 ?
                  reviews?.map(review => <Review key={review._id} review={review} handleDeleteReview={handleDeleteReview} />)
                  :
                  <div className='h-screen flex flex-col justify-center items-center col-span-2'>
                    <p className='text-3xl text-gray-500'>No Reviews Were Added</p>
                    <Link rel="noopener noreferrer" to="/services" className="px-8 py-3 text-white font-semibold rounded border border-yellow-300 bg-yellow-600 mt-5">Back to Services</Link>
                  </div>
              }
            </>
        }

      </div>
    </div>
  );
};

export default Reviews;