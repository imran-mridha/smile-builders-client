import React from 'react';
import useTitle from '../../hooks/useTitle';
import Lottie from 'lottie-react';
import reader from '../../assets/contact/contact.json'

const Contact = () => {
  useTitle('Contact')
  return (
    <div className=''>
      <h2 className="text-4xl font-semibold text-center mt-10 lg:my-10 leading-tight lg:text-5xl text-gray-600">Let's <span className='font-semibold text-yellow-500'>talk!</span> </h2>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16  text-gray-100">
        <div className="">
          <div data-aos="fade-right" className="">
          <Lottie animationData={reader} loop={true} />
          </div>
        </div>
        <div className="bg-white border border-yellow-400 rounded shadow-2xl p-7 sm:p-10">
          <h3 className="mb-4 text-3xl text-gray-600 font-semibold border-b-2 border-yellow-400 w-28 pb-2 sm:mb-6">
            Contact
          </h3>
          <form className="">      
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="email"
                className="inline-block mb-1 font-medium text-gray-500"
              >
                Name
              </label>
              <input
                placeholder="john doe"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="name"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="email"
                className="inline-block mb-1 font-medium text-gray-500"
              >
                E-mail
              </label>
              <input
                placeholder="john.doe@example.org"
                required
                type="email"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="password"
                className="inline-block mb-1 font-medium text-gray-500"
              >
                Message
              </label>
              <textarea name="" id="" cols="30" rows="5" className="flex-grow w-full h-20 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"></textarea>
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-xl transition duration-200 rounded shadow-md  border border-yellow-500 bg-yellow-500 hover:text-white focus:shadow-outline focus:outline-none"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;