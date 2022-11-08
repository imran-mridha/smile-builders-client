// import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const setAuthToken = (user) => {

  // let navigate = useNavigate();
  // let location = useLocation();
  // let from = location.state?.from?.pathname || "/";

  const currentUser = {
    email: user.email
  }

  fetch('https://genius-car-server-ashy.vercel.app/jwt', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(currentUser)
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('smile-token', data.token);
      toast.success('login Success!!!')
      // navigate(from, { replace: true });
    })
}