import React, { useState } from 'react';
import { API_URL } from '../helpers/api_urls';
import { capitalize, getShortDate } from '../helpers/utils';
import avatars from '../img/avatars/avatars';
import axios from 'axios';

export const PostEditForm = ({ user, broadcastTrigger }) => {
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
    broadcastTrigger();
  };

  return (
    <section className='post-edit-form'>
      <img
        src={avatars[user.avatarId].icon}
        alt={avatars[user.avatarId].name}
        className='top-icon'
      />
      <div className='form'>
        <label htmlFor='content'>
          Write a post {capitalize(user.nickname)}!
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
            placeholder='Need free help bulding UI? Leave details here!'
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <img
            src={avatars[user.avatarId].icon}
            alt={avatars[user.avatarId].name}
            className='top-icon left'
          />
          <button className='btn'>submit</button>
        </form>
      </div>
    </section>
  );
};
