import React, { useState, useEffect } from 'react';
import { Spinner } from './Spinner';
import { capitalize } from '../helpers/utils';
import { LikeButton } from './LikeButton';
import { API_URL } from '../helpers/urls';
import avatars from '../img/avatars/avatars';
import axios from 'axios';

export const Post = ({ post }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const initializeState = async () => {
      const respUser = await axios.get(API_URL.concat('user/' + post.userId));
      setUser(respUser.data);
      const respLikes = await axios.get(API_URL.concat('like/get/' + post.id));
      setLikes(respLikes.data);
      setIsLoading(false);
    };
    initializeState();
  }, []);

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
              <p>{likes} Likes</p>
              <LikeButton post={post} />
            </section>
          </>
        )}
      </div>
    </article>
  );
};
