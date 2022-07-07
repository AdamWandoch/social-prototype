import React, { useContext } from 'react';
import avatars from '../img/avatars/avatars';
import exitIcon from '../img/logout.svg';
import { capitalize } from '../helpers/utils';
import { GlobalContext } from '../contexts/GlobalContext';

export const CurrentUser = () => {
  const { user, setUser } = useContext(GlobalContext);
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
        onClick={() => setUser(null)}
      />
    </div>
  );
};
