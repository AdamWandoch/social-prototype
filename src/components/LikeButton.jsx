import React, { useContext, useState, useEffect } from 'react';
import { FeedContext } from '../contexts/FeedContext';
import { GlobalContext } from '../contexts/GlobalContext';
import { API_URL } from '../helpers/urls';
import like from '../img/like.svg';
import liked from '../img/liked.svg';
import axios from 'axios';

export const LikeButton = ({ post }) => {
  const { user } = useContext(GlobalContext);
  const { broadcastTrigger } = useContext(FeedContext);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const loadState = async () => {
      const like = { id: 0, postId: post.id, userId: user.id };
      const resp = await axios.post(API_URL.concat('like/user-liked'), like);
      setIsGlowing(resp.data);
    };
    loadState();
  }, []);

  const sendAlike = async () => {
    const like = { id: 0, postId: post.id, userId: user.id };
    const resp = await axios.post(API_URL.concat('like/save'), like);
    setIsGlowing(true);
    console.log(resp.data);
    broadcastTrigger();
  };

  return (
    <img
      src={isGlowing ? liked : like}
      className={isGlowing ? 'like-btn liked' : 'like-btn'}
      alt='like'
      onClick={() => sendAlike()}
    />
  );
};
