import React from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="bg-white border border-yellow-400 rounded shadow-2xl p-7 sm:p-10">
          <form className="">
            <div className="mb-1 sm:mb-2">
              <label
                className="inline-block mb-1 font-medium"
              >
                Service Name
              </label>
              <input
                placeholder="Service Name"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="serviceName"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                className="inline-block mb-1 font-medium"
              >
                Service Image
              </label>
              <input
                placeholder="Service Image URL"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="image"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                className="inline-block mb-1 font-medium"
              >
                Service Price
              </label>
              <input
                placeholder="$00.00"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="price"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                className="inline-block mb-1 font-medium"
              >
                Service Description
              </label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Service Description...' className="flex-grow w-full h-32 px-4 py-2 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"></textarea>
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-xl transition duration-200 rounded shadow-md  border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:shadow-outline focus:outline-none uppercase"
              >
                Add Service
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>

    </div>
  );
};

export default AddService;