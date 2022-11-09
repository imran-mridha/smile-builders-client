import React from 'react';
import { Link } from 'react-router-dom';
import sqlVsNosql from '../../../assets/blog/sql-vs-nosql.jpg';
import jwt from '../../../assets/blog/jwt.jpg';
import javaVsNode from '../../../assets/blog/java-vs-node.jpg';

const HomeBlog = () => {
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
        
      </div>
      <div className='pt-20 text-center'>
      <Link to='/blog'><button className='border py-2 px-4 text-xl font-semibold border-yellow-500 hover:bg-yellow-500 hover:text-white uppercase duration-200 rounded'>See All Blogs</button></Link>
      </div>
    </div>
  );
};

export default HomeBlog;