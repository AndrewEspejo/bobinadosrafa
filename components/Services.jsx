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
    <div className='body ' id='services'>
      <div className='big-image3'>
        <div
          className='absolute mx-auto h-screen flex flex-col justify-between w-full  lg:pl-5 lg:pr-8'
          style={{ background: 'rgba(0, 0, 0, 0.65)' }}
        >
          <div>
            <h1 className='text-white text-center iphone6:pt-2 text-2xl lg:pt-16 iphone8p:text-4xl font-serif '>
              Servicios
            </h1>
          </div>
          <div className='grid lg:grid-cols-3 grid-cols-1 md:gap-4 place-items-center flex-grow  iphone6:gap-4 pb-9'>
            {services ? (
              services.map((option) => (
                <div
                  className='flex md:flex-col flex-row items-center  bg-white text-gray-800 iphone8p:h-48 md:h-3/4 md:w-3/4 h-44  w-11/12 rounded-lg'
                  key={option.id}
                >
                  <img
                    src={option.image[0].name}
                    alt=''
                    className='md:w-full md:h-72 h-full iphone8p:w-40 w-32 bg-center rounded-md'
                  />
                  <div className='pt-10 lg:pt-5 h-64 flex flex-col items-center justify-around'>
                    <h1 className='md:pb-10 lg:text-xl text-md lg:pb-4 font-bold'>
                      {option.title}
                    </h1>

                    <p className='md:text-md text-xs lg:text-base flex-grow px-2 lg:px-3 lg:pt-3'>
                      {option.descripcion}
                    </p>
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
