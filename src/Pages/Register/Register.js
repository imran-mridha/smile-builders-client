import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  useTitle('Register');
  const navigate = useNavigate()
  const { createUser, updateUserProfile, setLoading } = useContext(AuthContext)
  const handleRegister = (e) => {

    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
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
            toast.success('Registration Success!!', { autoClose: 500 });
            handleUpdateUserProfile(fullName, photoURL);
            navigate('/login')
          })
      })
      .catch(err => console.error(err))
  }

  const handleUpdateUserProfile = (fullName, photoURL) => {
    const profile = {
      displayName: fullName,
      photoURL: photoURL
    }
    updateUserProfile(profile)
      .then(() => {
        setLoading(false)
        toast.success('Profile Update Successful', { autoClose: 500 })

      })
      .catch(error => {
        toast.error(error.message);
      })
  }
  return (
    <div className='flex justify-center my-20'>
      <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
        <div className="bg-white border border-yellow-400 rounded shadow-2xl p-7 sm:p-10">
          <h3 className="mb-4 text-3xl text-gray-600 font-semibold border-b-2 border-yellow-400 w-28 pb-2 sm:mb-6">
            Sign Up
          </h3>
          <form onSubmit={handleRegister}>
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="fullName"
                className="inline-block mb-1 font-medium"
              >
                Full Name
              </label>
              <input
                placeholder="John Doe"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="fullName"
              />
            </div>

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
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label
                className="inline-block mb-1 font-medium"
              >
                Photo URL
              </label>
              <input
                placeholder="Photo URL"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="photoURL"
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
                placeholder="*******"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-yellow-400 focus:outline-yellow-400 focus:shadow-outline"
                name="password"
              />
            </div>
            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full text-xl h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md  border border-yellow-400 hover:bg-yellow-500 hover:text-white focus:shadow-outline focus:outline-none"
              >
                Sign Up
              </button>
            </div>
            <p className="text-xs text-gray-600 sm:text-sm text-center">
              Already have an account? <span className='text-yellow-500 text-xl font-semibold'><Link to='/login'>Sign In</Link></span>
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

export default Register;