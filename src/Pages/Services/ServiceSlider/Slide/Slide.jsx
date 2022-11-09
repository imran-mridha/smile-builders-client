import React from 'react';
const Slide = ({serviceSlide}) => {
  return (
    <div className='mr-3'>
      <img className='w-full h-96 rounded-lg object-cover' src={serviceSlide?.image} alt="" />
    </div>
  );
};

export default Slide;