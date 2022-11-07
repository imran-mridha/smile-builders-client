import React from 'react';
import banner from '../../../assets/banner/Banner.png';

const Hero = () => {
  return (
    <div className='relative'>
      <img className='min-h-[400px] object-cover' src={banner} alt="" />
      <div className='absolute top-1/3 left-10 md:left-20'>
        <p className='text-4xl uppercase text-white font-semibold'>building <br /> great <span className='text-yellow-400 font-bold'> smiles</span> </p>
        <p className='text-xl text-white my-3'>
          This is Your Year to Smile
        </p>
        <button className='border border-yellow-400 rounded text-xl text-white font-semibold hover:bg-yellow-400 py-2 px-6 '>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;