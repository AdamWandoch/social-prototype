import React from 'react';
import avatars from '../img/avatars/avatars';
import { Avatar } from './Avatar';

export const AvatarsModal = ({ showChoice, pickAvatar }) => {
  return (
    <div className='avatars-modal'>
      <h1 className='text-centered margin-top-bottom'>Choose your avatar</h1>
      <div className='avatars' onClick={() => showChoice(false)}>
        {avatars.map((avatar, index) => (
          <Avatar key={index} index={index} pickAvatar={pickAvatar} />
        ))}
      </div>
    </div>
  );
};
