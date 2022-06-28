import React from 'react';
import avatars from '../img/avatars/avatars';
import exitIcon from '../img/logout.svg';
import { capitalize } from '../helpers/utils';

export const CurrentUser = ({ user, signout }) => {
  return (
    <div className='signed-in-user'>
      <img
        src={avatars[user.avatarId].icon}
        alt={avatars[user.avatarId].name}
        className='icon'
      />
      <p>Signed in as {capitalize(user.nickname)}</p>
      <img
        src={exitIcon}
        alt='sign out'
        className='door'
        onClick={() => signout(null)}
      />
    </div>
  );
};
