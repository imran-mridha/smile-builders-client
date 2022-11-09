import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import ReviewSlider from '../ReviewSlider/ReviewSlider';
const HomeReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://smile-builders-server.vercel.app/all-reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])
  return (
    <div className='container mx-auto'>
      <div className='mb-10 text-center'>
        <h2 className='text-4xl uppercase font-semibold text-gray-600'>Testimonials</h2>
        <hr className='w-2/12 mx-auto mt-3 border-2 border-yellow-400' />
        <p className='lg:w-5/12 mx-auto mt-5 text-gray-500'>At Smile Builders, we are focused on your wellbeing and want our results to speak for themselves. Take a look at what some of our happy patients had to say about their experience.</p>
      </div>
      <div className='mt-20'>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {
            reviews?.map(reviewSlide =>
              <SwiperSlide key={reviewSlide._id}>
                <ReviewSlider reviewSlide={reviewSlide} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  );
};

export default HomeReview;