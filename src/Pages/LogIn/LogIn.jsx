import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';


const LogIn = () => {
  useTitle('Login')
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { logInUser } = useContext(AuthContext)
  const handleLogin = (e) => {

    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email
        }

        fetch('https://smile-builders-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('smile-token', data.token);
            toast.success('login Success!!!', { autoClose: 500 })
            navigate(from, { replace: true });
          })
      })
      .catch(err => toast.error(err.message, { autoClose: 500 }))
  }
  return (
    <div className='flex justify-center my-20'>
      <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
        <div className="bg-white border border-yellow-400 rounded shadow-2xl p-7 sm:p-10">
          <h3 className="mb-4 text-3xl text-gray-600 font-semibold border-b-2 border-yellow-400 w-24 pb-2 sm:mb-6">
            Sign In
          </h3>
          <form onSubmit={handleLogin} className="">
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="email"
                className="inline-block mb-1 font-medium"
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
                className="inline-block mb-1 font-medium"
              >
                Password
              </label>
              <input
                placeholder="******"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="password"
              />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-xl transition duration-200 rounded shadow-md  border border-yellow-500 hover:bg-yellow-500 hover:text-white focus:shadow-outline focus:outline-none"
              >
                Sign In
              </button>
            </div>
            <p className="text-xs text-gray-600 sm:text-sm text-center">
              Don't have an account? <span className='text-yellow-500 text-xl font-semibold'><Link to='/register'>Sign Up</Link></span>
            </p>
          </form>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;