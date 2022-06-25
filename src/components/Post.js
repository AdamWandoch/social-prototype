import React, { useState, useEffect } from 'react';
import avatars from '../img/avatars/avatars';
import axios from 'axios';
import { API_URL } from '../helpers/api_urls';
import { Spinner } from './Spinner';
import { capitalize } from '../helpers/utils';

export const Post = ({ post }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const resp = await axios.get(API_URL.concat('user/' + post.userId));
      setUser(resp.data);
      setIsLoading(false);
    };
    getUser();
  }, [user]);

  return (
    <div className='post-wrapper'>
      {isLoading && <Spinner />}
      {user && (
        <img src={avatars[user.avatarId].icon} className='top-icon left' />
      )}
      <div className='post'>
        {user && (
          <p>
            <span className='signature'>
              {user.nickname} the {capitalize(avatars[user.avatarId].name)}:{' '}
            </span>
            {post.content}
          </p>
        )}
        <p className='timestamp'>{post.timestamp}</p>
      </div>
      {user && (
        <img src={avatars[user.avatarId].icon} className='top-icon up' />
      )}
    </div>
  );
};
