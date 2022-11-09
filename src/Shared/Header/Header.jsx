import React, { useContext, useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import logo from '../../assets/logo/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
  const { logOut, user } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('LogOut Success!!', { autoClose: 500 })
      })
  }

  const menuItems =
    <>
      <li> <NavLink className={({isActive}) => isActive ? `text-yellow-400`: `hover:text-yellow-400`} to='/home'>Home</NavLink> </li>
      <li> <NavLink className={({isActive}) => isActive ? `text-yellow-400`: `hover:text-yellow-400`} to='/services'>Services</NavLink> </li>
      <li> <NavLink className={({isActive}) => isActive ? `text-yellow-400`: `hover:text-yellow-400`} to='/blog'>Blog</NavLink> </li>
      <li> <NavLink className={({isActive}) => isActive ? `text-yellow-400`: `hover:text-yellow-400`} to='/contact'>Contact</NavLink> </li>
      {
        user ?
          <>
            <li> <NavLink className={({isActive}) => isActive ? `text-yellow-400`: `hover:text-yellow-400`} to='/addservice'>Add Service</NavLink> </li>
            <li> <NavLink className={({isActive}) => isActive ? `text-yellow-400`: `hover:text-yellow-400`} to='/reviews'>My Reviews</NavLink> </li>
            <img title={user?.displayName} className='w-12 h-12 rounded-full border p-1' src={user?.photoURL} alt="" />
            <button onClick={handleLogOut} className='border py-2 px-4 border-yellow-500 hover:bg-yellow-500 duration-200 rounded text-white'>Log Out</button>

          </>
          :
          <Link to='/login'>
            <button className='border py-2 px-6 border-yellow-500 bg-yellow-500 rounded hover:text-white duration-200'>Sign In</button>
          </Link>
      }
      
    </>


  return (
    <div className='bg-cyan-900'>
      <div className="px-4 md:px-0 py-5 container mx-auto">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="text-white text-2xl md:text-3xl md:text-start flex">
              <img className='w-16' src={logo} alt="" />
              <h2 className="uppercase text-white">Smile <br /> <span className="text-yellow-400 font-extrabold">Builders</span></h2>
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex text-white font-semibold">
            {menuItems}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-cyan-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >

                        <span className="text-white text-3xl md:text-start flex">
                          <img className='w-14' src={logo} alt="" />
                          <h2 className="uppercase text-white">Smile <br /> <span className="text-yellow-400 font-extrabold">Builders</span></h2>
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className='bg-cyan-900'>
                    <ul className="space-y-4 text-white font-semibold">
                      {menuItems}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;