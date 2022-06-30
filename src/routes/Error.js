import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <div className='error'>
      <h1>Error</h1>
      <p>This page doesn't exist.</p>
      <Link to='/'>
        <button className='btn'>HOME</button>
      </Link>
    </div>
  );
};
