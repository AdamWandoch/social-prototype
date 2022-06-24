import React, { useEffect, useState } from 'react';
import axios from 'axios';
import avatars from '../img/avatars/avatars';
import { Avatar } from './Avatar';
import { API_URL } from '../helpers/api_urls';

export const Feed = ({ userId, logout }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    axios.get(API_URL.concat(userId)).then((resp) => {
      setCurrentUser(resp.data);
    });
  }, [currentUser]);

  return (
    <div className='feed'>
      <p>Feed content here</p>
      <p>Current UserId: {currentUser && currentUser.id}</p>
      <img
        src={currentUser && avatars[currentUser.avatar].icon}
        alt='avatar'
        className='avatar avatar-big'
        onClick={() => logout(null)}
      />
    </div>
  );
};
