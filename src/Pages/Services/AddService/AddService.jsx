import React from 'react';
import Lottie from 'lottie-react';
import reader from '../../../assets/service/service.json';
import useTitle from '../../../hooks/useTitle';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'


const AddService = () => {
  const navigate = useNavigate()
  useTitle('Add Service')
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.serviceName.value;
    const image = form.image.value;
    const price = form.price.value;
    const time = new Date()
    const description = form.description.value;

    const service = {
      name,
      image,
      time,
      price,
      description
    }

    fetch('https://smile-builders-server.vercel.app/services',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Service Added Success',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
        navigate('/')
      }
    })
    .catch(err => console.error(err))

    console.log(name,image,price,description);
  }
  return (
    <div className='container mx-auto my-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-5 md:mx-0'>
        <div className="bg-white border border-yellow-400 rounded shadow-2xl p-7 sm:p-10">
        <h3 className="mb-4 text-3xl text-gray-600 font-semibold border-b-2 border-yellow-400 w-44 pb-2 sm:mb-6">
            Add Service
          </h3>
          <form onSubmit={handleAddService} className="">
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
                type="url"
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
              <textarea name="description" id="" cols="30" rows="10" placeholder='Service Description...' className="flex-grow w-full h-32 px-4 py-2 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"></textarea>
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
        <div data-aos="fade-left">
        <Lottie animationData={reader} loop={true} />
        </div>
      </div>

    </div>
  );
};

export default AddService;