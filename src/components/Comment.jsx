import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../helpers/urls';
import avatars from '../img/avatars/avatars';

export const Comment = ({ userId, content, timestamp }) => {
  const [user, setUser] = useState({ avatarId: 0 });

  useEffect(() => {
    const getUser = async (userId) => {
      const resp = await axios.get(API_URL.concat(`user/${userId}`));
      setUser(resp.data);
    };
    getUser(userId);
  }, []);

  return (
    <div className='comment'>
      {user && (
        <>
          <img src={avatars[user.avatarId].icon} className='avatar' />
          <span>
            {user.nickname} @ {timestamp}
          </span>
          <p>{content}</p>
        </>
      )}
    </div>
  );
};
