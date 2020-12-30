import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    const obtainServices = async () => {
      const resultado = await axios.get(
        'https://bobinadosrafa.herokuapp.com/servicios'
      );
      setServices(resultado.data);
    };
    obtainServices();
  }, []);
  return (
    <div className='body'>
      <div className='big-image3'>
        <div
          className='absolute mx-auto h-full flex flex-col justify-between w-full  pl-5 pr-8'
          style={{ background: 'rgba(0, 0, 0, 0.65)' }}
        >
          <div>
            <h1 className='text-white text-center pt-16 text-4xl font-serif'>
              Servicios
            </h1>
          </div>
          <div className='grid grid-cols-3 gap-4 place-items-center flex-grow'>
            {services ? (
              services.map((option) => (
                <div
                  className='flex flex-col items-center  bg-white text-gray-800 h-3/4 w-3/4 rounded-lg'
                  key={option.id}
                >
                  <img
                    src={option.image[0].name}
                    alt=''
                    className='w-full h-72 bg-center rounded-md'
                  />
                  <div className='pt-10 h-64 text-center'>
                    <h1 className='pb-10 text-xl font-bold'>{option.title}</h1>
                    <ul>
                      <li className='text-md'>{option.descripcion}</li>
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
