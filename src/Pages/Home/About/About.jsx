import React from 'react';
import doctor from '../../../assets/about/doctor.jpg'

const About = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div data-aos="fade-right">
          <img className='h-96 w-full rounded-lg' src={doctor} alt="" />
        </div>
        <div>
          <p className='text-yellow-400 text-xl font-bold'>About Me</p>
          <h2 className='text-4xl text-gray-600 uppercase mt-5'>Dr. Michael Weisberg</h2>
          <p className='text-xl text-gray-500 mt-5'>
            Dr. Michael Weisberg, founder of Smile Builders is a board-certified orthodontist and certified pediatric dentist who offers more than his impressive credentials.   Aside from being one of the most trained specialists in his field, Dr. Weisberg’s sincere compassion and gentle nature shines through.  Kids are naturally drawn to him, and teenagers love his jokes.  He connects with them on their level as a friend.  There’s a peace of mind knowing that the same eyes and hands that cared for your baby’s teeth are now looking out for your teenager’s oral health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;