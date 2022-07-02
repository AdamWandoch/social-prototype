import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <div className='text-centered footer'>
        <p>Adam Wandoch 2022</p>
        <p>
          <a
            href='https://github.com/AdamWandoch/social-prototype'
            target='_blank'
          >
            GitHub
          </a>
        </p>
      </div>
    </>
  );
};
