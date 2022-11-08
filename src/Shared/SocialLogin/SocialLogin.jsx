import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import googleIcon from '../../assets/social/google.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { setAuthToken } from '../../api/auth';

const SocialLogin = () => {
  const {providerLogin} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider()
  const handleGoogleLogin = ()=>{

    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setAuthToken(user)
      toast.success('Login Success!!', {autoClose: 500})
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