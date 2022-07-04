import React, { useState } from 'react';
import { API_URL } from '../helpers/api_urls';
import like from '../img/like.svg';
import axios from 'axios';

export const LikeButton = ({ userId, post, broadcastTrigger }) => {
  const [isGlowing, setIsGlowing] = useState(
    post.usersThatLiked.includes(userId)
  );

  const sendAlike = async (user, post) => {
    const resp = await axios.post(API_URL.concat('post/like/' + user), {
      id: post,
    });
    setIsGlowing(true);
    console.log(resp.data);
    broadcastTrigger();
  };

  return (
    <img
      src={like}
      className={isGlowing ? 'like-btn liked' : 'like-btn'}
      alt='like'
      onClick={() => sendAlike(userId, post.id)}
    />
  );
};
