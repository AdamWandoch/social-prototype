import React, { useState } from 'react';
import like from '../img/like.svg';
import axios from 'axios';

const sendAlike = () => {};

export const LikeButton = ({ userId, postId }) => {
  const [isGlowing, setIsGlowing] = useState(false);
  
  return (
    <section className='like-btn'>
      <img src={like} alt='like' onClick={() => sendAlike} />
    </section>
  );
};
