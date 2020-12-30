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
    <div className='body '>
      <div className='big-image3'>
        <div
          className='absolute mx-auto h-screen flex flex-col justify-between w-full  pl-5 pr-8'
          style={{ background: 'rgba(0, 0, 0, 0.65)' }}
        >
          <div>
            <h1 className='text-white text-center pt-16 text-4xl font-serif'>
              Servicios
            </h1>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 md:gap-4 place-items-center flex-grow pb-3'>
            {services ? (
              services.map((option) => (
                <div
                  className='flex md:flex-col flex-row items-center  bg-white text-gray-800 h-48 md:h-3/4 md:w-3/4 w-11/12 rounded-lg'
                  key={option.id}
                >
                  <img
                    src={option.image[0].name}
                    alt=''
                    className='md:w-full md:h-72 h-full w-36 bg-center rounded-md'
                  />
                  <div className='pt-10 h-64 text-center'>
                    <h1 className='md:pb-10 text-xl font-bold'>
                      {option.title}
                    </h1>
                    <ul>
                      <li className='md:text-md text-xs'>
                        {option.descripcion}
                      </li>
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
