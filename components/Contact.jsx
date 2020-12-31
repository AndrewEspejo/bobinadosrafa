import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const Contact = () => {
  return (
    <div className='body' id='contact'>
      <div className='big-image4'>
        <div
          className='absolute mx-auto h-full w-full '
          style={{ background: 'rgba(0, 0, 0, 0.65)' }}
        >
          <div className='flex flex-col items-center justify-center text-center h-full'>
            <div className='text-white'>
              <h1 className='pb-24 text-5xl'>Contáctanos</h1>

              <h3 className='text-3xl pb-5'>Rafael Isaías Espejo</h3>
              <h4 className='text-3xl pb-5'>(+57) 3117419921</h4>
              <h4 className='text-3xl pb-5'>bobinadosrafa@gmail.com</h4>
              <h4 className='text-3xl pb-5'>Segovia-Antioquia</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
