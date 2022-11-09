import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { CirclesWithBar } from  'react-loader-spinner'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation()

  if (loading) {
    return <div className='h-screen flex justify-center items-center'>
      {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div> */}
      <CirclesWithBar
              height="100"
              width="100"
              color="#E6BE05"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              outerCircleColor=""
              innerCircleColor=""
              barColor=""
              ariaLabel='circles-with-bar-loading'
            />
    </div>
  }
  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;