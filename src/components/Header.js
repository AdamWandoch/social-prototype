import React from 'react';
import logo from '../img/avatar-group-flipped.png';

export const Header = () => {
  return (
    <>
      <img src={logo} className='logo' alt='' />
      <h1 className='title'>Social App Prototype.</h1>
    </>
  );
};
