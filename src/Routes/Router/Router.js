import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import LogIn from "../../LogIn/LogIn";

import Home from "../../Pages/Home/Home/Home";
import Register from "../../Pages/Register/Register";
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
        path: '/service/:id',
        element: <ServiceDetails />
      },
      {
        path: '/addservice',
        element: <AddService />
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