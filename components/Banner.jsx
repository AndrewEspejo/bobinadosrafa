import React, { useState } from 'react';
import Link from 'next';

export const Banner = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className='body'>
      <div className='big-image'>
        <div className='overlay'>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-row flex-wrap justify-between items-center px-5  text-white text-xl'>
              <img src='/assets/Logo.png' alt='' className='pl-5 font-bold ' />

              <button
                className=' inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                onClick={handleClick}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
              {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
              <div
                className={`${
                  active ? '' : 'hidden'
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
              >
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                    Home
                  </a>

                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                    Services
                  </a>

                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                    About us
                  </a>

                  <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='flex-grow flex flex-col justify-center items-center'>
              <h1 className='text-white text-4xl lg:text-8xl font-thin pb-4 '>
                Electrobinados Rafa
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
