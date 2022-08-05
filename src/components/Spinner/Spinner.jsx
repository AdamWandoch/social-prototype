import React from 'react';
import spinner from '../img/spinner.png';

export const Spinner = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt='spinner' />
    </div>
  );
};
