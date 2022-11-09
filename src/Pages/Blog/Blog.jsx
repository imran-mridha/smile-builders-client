import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
  return (
    <div className="space-y-4 w-11/12 md:w-9/12 mx-auto my-20">
      <h2 className="mb-12 text-3xl font-semibold leading-none text-center sm:text-5xl">Questions & Answers</h2>
      <details className="group border-l-4 border-yellow-500 bg-gray-50 p-6" open>
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            Difference between SQL and NoSQL
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
          <p className="mt-4 leading-relaxed text-gray-700">
            There are five practical differences between SQL and NoSQL:
          </p>
          <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
            1. Language
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            SQL has been around for over 40 years, so it is recognizable, documented, and widely-used. Safe and versatile, it’s particularly well suited for complex queries. However, SQL restricts the user to working within a predefined tabular schema, and more care must be taken to organize and understand the data before it is used.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            The dynamic schemata of NoSQL databases allow representation of alternative structures, often alongside each other, encouraging greater flexibility. There is less emphasis on planning, greater freedom when adding new attributes or fields, and the possibility of varied syntax across databases. As a group, however, NoSQL languages lack the standard interface which SQL provides, so more complex queries can be difficult to execute.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
          </p>
          <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
            2. Scalability
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            Though there are many dialects of SQL, all share a common syntax and almost-identical grammar. When querying relational databases, fluency in one language translates to proficiency in most others. On the other hand, there is very little consistency between NoSQL languages, as they concern a diverse set of unrelated technologies. Many NoSQL databases have a unique data manipulation language constrained by particular structures and capabilities.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. These are useful generalizations, but it’s important to note:
          </p>
          <ul className='list-disc m-3'>
            <li>SQL databases can be scaled horizontally as well, though sharding or partitioning logic is often the user’s onus and not well supported.</li>
            <li>NoSQL technologies are diverse and while many rely on the master-slave architecture, options for scaling vertically also exist.</li>
            <li>Savings made using more efficient data structures can overwhelm differences in scalability; most important is to understand the use case and plan accordingly.</li>
          </ul>
        </p>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          3. Structure
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          NoSQL databases need not stick to this format, but generally fit into one of four broad categories:
        </p>
        <ul className='list-disc m-3'>
          <li><span className='font-semibold'>Column-oriented</span> databases transpose row-oriented RDBMSs, allowing efficient storage of high-dimensional data and individual records with varying attributes.</li>
          <li><span className='font-semibold'>Key-Value</span> stores are dictionaries which access diverse objects with a key unique to each.</li>
          <li><span className='font-semibold'>Document</span> stores hold semi-structured data: objects which contain all of their own relevant information, and which can be completely different from each other.</li>
          <li><span className='font-semibold'>Graph</span> databases add the concept of relationships (direct links between objects) to documents, allowing rapid traversal of greatly connected data sets.</li>
        </ul>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          4. Properties
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          At a high level, SQL and NoSQL comply with separate rules for resolving transactions. RDBMSs must exhibit four “ACID” properties:
        </p>
        <ul className='list-disc m-3'>
          <li><span className='font-semibold'>Atomicity </span> means all transactions must succeed or fail completely. They cannot be partially-complete, even in the case of system failure.</li>
          <li><span className='font-semibold'>Consistency </span> means that at each step the database follows invariants: rules which validate and prevent corruption.</li>
          <li><span className='font-semibold'>Isolation </span> prevents concurrent transactions from affecting each other. Transactions must result in the same final state as if they were run sequentially, even if they were run in parallel.</li>
          <li><span className='font-semibold'>Durability </span> makes transactions final. Even system failure cannot roll-back the effects of a successful transaction.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-gray-700">
          NoSQL technologies adhere to the “CAP” theorem, which says that in any distributed database, only two of the following properties can be guaranteed at once:
        </p>
        <ul className='list-disc m-3'>
          <li><span className='font-semibold'>Consistency </span> Every request receives the most recent result, or an error. (Note this is different than in ACID)</li>
          <li><span className='font-semibold'>Availability </span> Every request has a non-error result, regardless of how recent that result is.</li>
          <li><span className='font-semibold'>Partition tolerance </span> Any delays or losses between nodes will not interrupt the system’s operation.</li>
        </ul>
        <h2 className="mt-4 leading-relaxed text-2xl text-gray-700">
          5. Support and communities
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          SQL databases represent massive communities, stable codebases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          SQL is available to most major platforms, from operating systems to architectures and programming languages. Compatibility varies more widely for NoSQL, and dependencies need to be investigated more carefully.
        </p>

      </details>

      <details className="group border-l-4 border-yellow-500 bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            What is JWT, and how does it work?
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
          JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          Once decoded, you will get two JSON strings:
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          1. Them header and the payload. <br />
          2. The signature.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          he payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
        </p>
      </details>
      <details className="group border-l-4 border-yellow-500 bg-gray-50 p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900">
            What is the difference between javascript and NodeJS?
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
          1. NodeJS
        </h2>
        <ul className='list-disc m-3'>
          <li>NodeJS is a Javascript runtime environment.</li>
          <li>We can run Javascript outside the browser with the help of NodeJS.</li>
          <li>It is mostly used on the server-side.</li>
          <li>Nodejs does not have capability to add HTML tags.</li>
          <li>V8 is the Javascript engine inside of node.js that parses and runs Javascript. </li>
        </ul>
      </details>
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
        
      </details>
    </div>
  );
};

export default Blog;