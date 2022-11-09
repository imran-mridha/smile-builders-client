import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import BlogJvN from "../../Pages/Blog/BlogJvN";
import BlogJwt from "../../Pages/Blog/BlogJwt";
import BlogNode from "../../Pages/Blog/BlogNode";
import BlogSql from "../../Pages/Blog/BlogSql";
import Contact from "../../Pages/Contact/Contact";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import UpdateReview from "../../Pages/Reviews/UpdateReview/UpdateReview";
import AddService from "../../Pages/Services/AddService/AddService";
import ServiceDetails from "../../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/BlogSql',
        element: <BlogSql />
      },
      {
        path: '/BlogJwt',
        element: <BlogJwt />
      },
      {
        path: '/BlogJvN',
        element: <BlogJvN />
      },
      {
        path: '/BlogNode',
        element: <BlogNode />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/services/:id',
        loader: ({params})=> fetch(`https://smile-builders-server.vercel.app/services/${params.id}`),
        element: <ServiceDetails />
      },
      {
        path: '/addservice', 
        element: <PrivateRoute><AddService /></PrivateRoute>
      },
      {
        path: '/reviews',
        element: <PrivateRoute><Reviews /></PrivateRoute>
      },
      {
        path: '/update-review/:id',
        loader: ({params})=> fetch(`https://smile-builders-server.vercel.app/reviews/${params.id}`),
        element: <PrivateRoute><UpdateReview /></PrivateRoute>
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