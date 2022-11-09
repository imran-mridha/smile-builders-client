import React from 'react';
import javaVsNode from '../../assets/blog/java-vs-node.jpg';
const BlogJvN = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='w-11/12 lg:w-2/3 mx-auto text-gray-600'>
        <h2 className='text-3xl mb-5 font-semibold'>What is JWT, and how does it work?</h2>
        <img className='border p-2' src={javaVsNode} alt="" />
        
        <p className="mt-4 leading-relaxed text-gray-700">
        JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all.
        </p>

        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          1. Javascript
        </h2>
        <ul className='list-disc m-3'>
          <li>Javascript is a programming language that is used for writing scripts on the website.</li>
          <li>Javascript can only be run in the browsers.</li>
          <li>It is basically used on the client-side.</li>
          <li>Javascript is capable enough to add HTML and play with the DOM. </li>
          <li>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</li>
        </ul>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          2. NodeJS
        </h2>
        <ul className='list-disc m-3'>
          <li>NodeJS is a Javascript runtime environment.</li>
          <li>We can run Javascript outside the browser with the help of NodeJS.</li>
          <li>It is mostly used on the server-side.</li>
          <li>Nodejs does not have capability to add HTML tags.</li>
          <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
        </ul>
        
      </div>
    </div>
  );
};

export default BlogJvN;