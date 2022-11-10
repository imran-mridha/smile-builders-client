import React from 'react';
import logo from '../../assets/logo/logo.png';

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white">
      <div className="container px-6 pt-6 w-11/12 mx-auto">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2">
          <div className="mb-6">
            <div className="text-white text-3xl md:text-start flex items-center justify-center mb-3">
              <img className='w-16' src={logo} alt="" />
              <h2 className="uppercase">Smile <span className="text-yellow-400 font-extrabold">Builders</span></h2>
            </div>
            <p className="text-center md:text-start">There’s no substitute for compassion, no shortcut when it comes to sincerity.</p>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-2xl text-center md:text-start">Categories</h5>
            <ul className="list-none mb-0 text-center md:text-start">
              <li>
                <a href="#!" className="text-white">English</a> |
                <a href="#!" className="text-white"> Spanish</a> |
                <a href="#!" className="text-white"> Italian</a>
              </li>
              <li>
                <a href="#!" className="text-white">French</a> |
                <a href="#!" className="text-white"> Chinese</a> |
                <a href="#!" className="text-white"> German</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5 text-2xl text-center md:text-start">Recent Blogs</h5>

            <ul className="list-none mb-0 text-center md:text-start">
              <li>
                <a href="#!" className="text-white">9 Things to do in Colorado</a>
              </li>
              <li>
                <a href="#!" className="text-white">Up Late with Ben Harvey</a>
              </li>
              <li>
                <a href="#!" className="text-white">California to phase out sales</a>
              </li>
              <li>
                <a href="#!" className="text-white">Shaquille Neal auctions a 1000 size</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <div className="">
              <h6 className="text-2xl uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Contact Details
              </h6>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" className="w-4 mr-4" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor"
                    d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                  </path>
                </svg>
                New York, NY 10012, US
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" className="w-4 mr-4"
                  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                  </path>
                </svg>
                info@example.com
              </p>
              <p className="flex items-center justify-center md:justify-start mb-4">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" className="w-4 mr-4" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                  </path>
                </svg>
                + 01 234 567 88
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mb-6 border-t pt-10">
          <div className="">
            <a href="https://www.facebook.com/mdev.imran/" target="_blank" type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-yellow-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f"
                className="w-2 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                </path>
              </svg>
            </a>
            <a href="https://www.instagram.com/imran.web_developer/" target="_blank" type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-yellow-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-3 h-full mx-auto"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                </path>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/md-imran-mridha-a4487a23b/" target="_blank" type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-yellow-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in"
                className="w-3 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                </path>
              </svg>
            </a>

            <a href="https://github.com/imran-mridha" target="_blank" type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-yellow-600  focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-3 h-full mx-auto"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                </path>
              </svg>
            </a>
          </div>
          <div className="">
            <form action="">
              <div className="flex justify-between items-center">
                <div className="mb-6">
                  <input type="text" className="form-control w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none "
                    id="exampleFormControlInput1" placeholder="Email address" />
                </div>

                <div className=" mb-6">
                  <button type="button"
                    className="inline-block px-6 py-2.5 border-2 border-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded  hover:bg-yellow-600  focus:bg-yellow-700  transition duration-150 ease-in-out">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        © 2022 Copyright:
        <a className="text-white" href="#">All Right Reserved By Imran.</a>
      </div>
    </footer>
  );
};

export default Footer;