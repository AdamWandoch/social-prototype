import React from 'react';
import avatars from '../img/avatars/avatars';

export const Avatar = ({ index, pickAvatar }) => {
  const handleClick = () => {
    pickAvatar(index);
  };

  return (
    <div onClick={handleClick} className='avatar-wrapper'>
      <img src={avatars[index].icon} alt='avatar' className='avatar' />
      <p className='avatar-name'>{avatars[index].name.toUpperCase()}</p>
    </div>
  );
};
