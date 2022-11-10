import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import Slide from '../Slide/Slide';

const ServiceSlider = () => {
  const [services, setServices] = useState([]);


  useEffect(() => {
    fetch('https://smile-builders-server.vercel.app/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className='mt-20 container mx-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          services?.map(serviceSlide =>
            <SwiperSlide key={serviceSlide._id}>
              <Slide serviceSlide={serviceSlide} />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
};

export default ServiceSlider;