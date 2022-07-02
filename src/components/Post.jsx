import React, { useState, useEffect } from 'react';
import avatars from '../img/avatars/avatars';
import axios from 'axios';
import { API_URL } from '../helpers/api_urls';
import { Spinner } from './Spinner';
import { capitalize } from '../helpers/utils';
import { LikeButton } from './LikeButton';

export const Post = ({ post, currentUser }) => {
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
    <article className='post-wrapper'>
      {isLoading && <Spinner />}
      <div className='post'>
        {user && (
          <>
            <span className='signature'>
              {user.nickname} the {capitalize(avatars[user.avatarId].name)}:{' '}
            </span>
            <div className='post-content'>{post.content}</div>
            <img src={avatars[user.avatarId].icon} className='avatar' />
            <p className='timestamp'>{post.timestamp}</p>
            <section className='likesNcomments'>
              <p>{post.likes} Likes</p>
              <LikeButton userId={currentUser.id} postId={post.id} />
            </section>
          </>
        )}
      </div>
    </article>
  );
};
