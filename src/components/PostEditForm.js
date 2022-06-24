import React, { useState } from 'react';
import avatars from '../img/avatars/avatars';
import { capitalize } from '../helpers/utils';

export const PostEditForm = ({ user }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('state: ' + content);
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
          {capitalize(user.nickname)} says:
        </label>
        <form onSubmit={handleSubmit}>
          <textarea
            type='text'
            name='content'
            id='content'
            className='content-input'
            rows={5}
            value={content}
            placeholder='your thoughts to go here :)'
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};
