import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Nosotros = () => {
  const [categorys, setCategorys] = useState();
  useEffect(() => {
    const obtenerCategorias = async () => {
      const resultado = await axios.get(
        'https://bobinadosrafa.herokuapp.com/valores'
      );
      setCategorys(resultado.data);
    };
    obtenerCategorias();
  }, []);
  return (
    <div className='body'>
      <div className='big-image2'>
        <div
          className='absolute mx-auto h-full w-full '
          style={{ background: 'rgba(0, 0, 0, 0.65)' }}
        >
          <div className='h-screen grid grid-rows-2 place-items-center text-white '>
            {categorys ? (
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-2xl pb-3 font-bold'>
                  {categorys[0].title}
                </h1>
                <p className='w-72'>{categorys[0].descripcion}</p>
              </div>
            ) : (
              <div></div>
            )}
            {categorys ? (
              <div className='flex flex-row justify-between '>
                <div className='text-center pr-32'>
                  <h1 className='text-2xl pb-3 font-bold'>
                    {categorys[1].title}
                  </h1>
                  <p className='w-72'>{categorys[1].descripcion}</p>
                </div>
                <div className='text-center pl-32'>
                  <h1 className='text-2xl pb-3 font-bold'>
                    {categorys[2].title}
                  </h1>
                  <p className='w-72'>{categorys[2].descripcion}</p>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
