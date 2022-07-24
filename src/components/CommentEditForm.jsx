import axios from 'axios';
import { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { FeedContext } from '../contexts/FeedContext';
import { PostContext } from '../contexts/PostContext';
import { API_URL } from '../helpers/urls';
import { getShortDate } from '../helpers/utils';

const postComment = async (comment) => {
  const resp = await axios.post(API_URL.concat('comment/save'), comment);
};

export const CommentEditForm = () => {
  const [comment, setComment] = useState('');
  const { user } = useContext(GlobalContext);
  const { post } = useContext(PostContext);
  const { broadcastTrigger } = useContext(FeedContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      postId: post.id,
      userId: user.id,
      content: comment,
      timestamp: getShortDate(),
    };
    postComment(commentData);
    setComment('');
    broadcastTrigger();
  };

  return (
    <section className='comments-edit-form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='comment'>Enter comment: </label>
        <input
          type='text'
          id='comment'
          name='comment'
          required
          placeholder='your comment here'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button className='btn'>send</button>
      </form>
    </section>
  );
};
