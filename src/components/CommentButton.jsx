import { useState } from 'react';
import comment from '../img/comment.svg';

export const CommentButton = ({ setAreCommentsOpen }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setAreCommentsOpen(!isActive);
  };

  return (
    <img
      onClick={() => handleClick()}
      src={comment}
      alt='toggle comments'
      className={isActive ? 'like-btn liked' : 'like-btn'}
    />
  );
};
