import { useContext, useState } from 'react';
import { capitalize, getShortDate } from '../helpers/utils';
import { GlobalContext } from '../contexts/GlobalContext';
import { API_URL } from '../helpers/urls';
import avatars from '../img/avatars/avatars';
import axios from 'axios';

export const PostEditForm = ({ broadcastTrigger }) => {
  const { user } = useContext(GlobalContext);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postPost = async () => {
      const post = {
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
            rows={3}
            value={content}
            placeholder='Need help bulding ReactJS UI? Leave details here!'
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <img
            src={avatars[user.avatarId].icon}
            alt={avatars[user.avatarId].name}
            className='top-icon left'
          />
          <button className='btn'>post</button>
        </form>
      </div>
    </section>
  );
};
