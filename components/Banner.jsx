import React from 'react';

export const Banner = () => {
  return (
    <div className='body'>
      <div className='big-image'>
        <div className='overlay'>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex flex-row justify-between items-center px-5  text-white text-xl'>
              <img src='/assets/Logo.png' alt='' className='pl-5 font-bold' />
              <ul className='flex flex-row justify-around items-center'>
                <li className='px-5 text-2xl font-thin '>Inicio</li>
                <li className='px-5 text-2xl font-thin '>Nosotros</li>
                <li className='px-5 text-2xl font-thin '>Servicios</li>
                <li className='px-5 text-2xl font-thin '>Contáctanos</li>
              </ul>
            </div>
            <div className='flex-grow flex flex-col justify-center items-center'>
              <h1 className='text-white text-8xl font-thin pb-4 '>
                Electrobinados Rafa
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
