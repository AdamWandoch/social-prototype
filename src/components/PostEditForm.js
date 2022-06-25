import React, { useState } from 'react';
import avatars from '../img/avatars/avatars';
import { capitalize, getShortDate } from '../helpers/utils';
import axios from 'axios';
import { API_URL } from '../helpers/api_urls';

export const PostEditForm = ({ user }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postPost = async () => {
      const post = {
        id: 0,
        userId: user.id,
        content: content,
        timestamp: getShortDate(),
      };
      const resp = await axios.post(API_URL.concat('post/post'), post);
    };
    postPost();
    setContent('');
  };

  return (
    <div className='post-edit-form'>
      <img
        src={avatars[user.avatarId].icon}
        alt={avatars[user.avatarId].name}
        className='top-icon'
      />
      <div className='form'>
        <label htmlFor='content' className='says'>
          Write a post {capitalize(user.nickname)}! The{' '}
          {capitalize(avatars[user.avatarId].name)} way!
        </label>
        <form onSubmit={handleSubmit}>
          <textarea
            type='text'
            name='content'
            id='content'
            className='content-input'
            required
            rows={5}
            value={content}
            placeholder='Who wants help bulding UI? Leave details here!'
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <img
            src={avatars[user.avatarId].icon}
            alt={avatars[user.avatarId].name}
            className='top-icon left'
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
