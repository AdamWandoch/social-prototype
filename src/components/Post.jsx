import React, { useState, useEffect } from 'react';
import { Spinner } from './Spinner';
import { capitalize } from '../helpers/utils';
import { LikeButton } from './LikeButton';
import { API_URL } from '../helpers/urls';
import avatars from '../img/avatars/avatars';
import axios from 'axios';

export const Post = ({ post, likes, comments }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [commentsForm, setCommentsForm] = useState(false);

  useEffect(() => {
    const initializeState = async () => {
      const respUser = await axios.get(API_URL.concat('user/' + post.userId));
      setUser(respUser.data);
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
            <img src={avatars[user.avatarId].icon} className='avatar' />
            <div className='signature'>
              {capitalize(user.nickname)} the{' '}
              {capitalize(avatars[user.avatarId].name)}
            </div>
            <p className='timestamp'>{post.timestamp}</p>
            <div className='post-content'>{post.content}</div>
            <section className='likesNcomments'>
              <p>
                {comments} {comments === 1 ? 'comment' : 'comments'}
              </p>
              <p>
                {likes} {likes === 1 ? 'like' : 'likes'}
              </p>
              <LikeButton post={post} />
            </section>
          </>
        )}
      </div>
    </article>
  );
};
