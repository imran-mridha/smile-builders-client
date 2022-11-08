import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import LogIn from "../../LogIn/LogIn";

import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import AddService from "../../Pages/Services/AddService/AddService";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/services/:id',
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails />
      },
      {
        path: '/addservice',
        element: <AddService />
      },
      {
        path: '/reviews',
        element: <Reviews />
      },
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])