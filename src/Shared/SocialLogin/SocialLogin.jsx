import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import googleIcon from '../../assets/social/google.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom'

const SocialLogin = () => {

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleLogin = () => {

    providerLogin(googleProvider)
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
            toast.success('Login Success!!', { autoClose: 500 });
            navigate(from, { replace: true });
          })

      })
      .catch(err => console.error(err))

  }
  return (
    <div onClick={handleGoogleLogin} className='flex border rounded items-center justify-center p-2 mt-5 cursor-pointer'>
      <img className='mr-3' src={googleIcon} alt="" />
      <div className='flex justify-center'>
        <p>Continue With Google</p>
      </div>
    </div>
  );
};

export default SocialLogin;