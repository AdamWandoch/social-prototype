import React, { useContext, useState } from 'react';
import { FeedContext } from '../contexts/FeedContext';
import { GlobalContext } from '../contexts/GlobalContext';
import { API_URL } from '../helpers/urls';
import like from '../img/like.svg';
import liked from '../img/liked.svg';
import axios from 'axios';

export const LikeButton = ({ post }) => {
  const { user } = useContext(GlobalContext);
  const { broadcastTrigger } = useContext(FeedContext);
  const [isGlowing, setIsGlowing] = useState(
    post.usersThatLiked.includes(user.id)
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
      src={isGlowing ? liked : like}
      className={isGlowing ? 'like-btn liked' : 'like-btn'}
      alt='like'
      onClick={() => sendAlike(user.id, post.id)}
    />
  );
};
