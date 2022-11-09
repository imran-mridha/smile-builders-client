import React from 'react';
import jwt from '../../assets/blog/jwt.jpg';

const BlogJwt = () => {
  return (
    <div className='container mx-auto my-20'>
      <div className='w-11/12 lg:w-2/3 mx-auto text-gray-600'>
        <h2 className='text-3xl mb-5 font-semibold'>What is JWT, and how does it work?</h2>
        <img className='border p-2' src={jwt} alt="" />
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
      </div>
    </div>
  );
};

export default BlogJwt;