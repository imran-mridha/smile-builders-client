import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import sqlVsNosql from '../../assets/blog/sql-vs-nosql.jpg';
import jwt from '../../assets/blog/jwt.jpg';
import javaVsNode from '../../assets/blog/java-vs-node.jpg';
import node from '../../assets/blog/node.png';


const Blog = () => {
  useTitle('Blogs')
  return (
    <div className="space-y-4 w-11/12 container mx-auto my-20">
      <div className='mb-10 text-center'>
        <h2 className='text-4xl uppercase font-semibold text-gray-600'>Blogs</h2>
        <hr className='w-1/12 mx-auto mt-3 border-2 border-yellow-400' />
        <p className='lg:w-6/12 mx-auto mt-5 text-gray-500'>SmileBuilders is equipped to handle all your dental needs, from a regular cleaning to a full-mouth reconstruction.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className='border p-5 rounded-lg shadow-lg'>
          <img className='rounded-lg' src={sqlVsNosql} alt="" />
          <h2 className='text-2xl mt-3'>Difference between SQL and NoSQL</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <Link to='/BlogSql'><span className='text-yellow-400 font-bold'>Read More</span></Link>
          </p>
        </div>
        <div className='border p-5 rounded-lg shadow-lg'>
          <img className='rounded-lg' src={jwt} alt="" />
          <h2 className='text-2xl mt-3'>What is JWT, and how does it work?</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. <Link to='/BlogJwt'><span className='text-yellow-400 font-bold'>Read More</span></Link>
          </p>
        </div>
        <div className='border p-5 rounded-lg shadow-lg'>
          <img className='rounded-lg' src={javaVsNode} alt="" />
          <h2 className='text-2xl mt-3'>What is the difference between javascript and NodeJS?</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. <Link to='/BlogJvN'><span className='text-yellow-400 font-bold'>Read More</span></Link>
          </p>
        </div>
        <div className='border p-5 rounded-lg shadow-lg'>
          <img className='rounded-lg' src={node} alt="" />
          <h2 className='text-2xl mt-3'>How does NodeJS handle multiple requests at the same time?</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
            No.<Link to='/BlogNode'><span className='text-yellow-400 font-bold'>Read More</span></Link>
          </p>
        </div>
      </div>

      {/* <h2 className="mb-12 text-3xl font-semibold leading-none text-center sm:text-5xl">Questions & Answers</h2>
      <details className="group border-l-4 border-yellow-500 bg-gray-50 p-6" open>
      <details className="group border-l-4 border-yellow-500 bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            How does NodeJS handle multiple requests at the same time?
          </h2>

          <span
            className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-yellow-500 sm:p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 
        </p>
        
      </details> */}
    </div>
  );
};

export default Blog;