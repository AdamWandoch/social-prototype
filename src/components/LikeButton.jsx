import React, { useState } from 'react';
import { API_URL } from '../helpers/api_urls';
import like from '../img/like.svg';
import axios from 'axios';

export const LikeButton = ({ userId, postId }) => {
  const [isGlowing, setIsGlowing] = useState(false);

  const sendAlike = async (user, post) => {
    const resp = await axios.post(API_URL.concat('post/like/' + user), {
      id: post,
    });
    console.log(resp.data);
  };

  return (
    <section className='like-btn'>
      <img src={like} alt='like' onClick={() => sendAlike(userId, postId)} />
    </section>
  );
};
