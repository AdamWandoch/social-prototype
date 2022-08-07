import { useState, useEffect } from 'react';
import { Spinner } from '../Spinner/Spinner';
import { LikeButton } from '../LikeButton/LikeButton';
import { CommentButton } from '../CommentButton/CommentButton';
import { Comments } from '../Comments/Comments';
import { API_URL } from '../../helpers/urls';
import { capitalize } from '../../helpers/utils';
import { PostContext } from '../../contexts/PostContext';
import avatars from '../../img/avatars/avatars';
import axios from 'axios';

export const Post = ({ post, likes, comments }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [areCommentsOpen, setAreCommentsOpen] = useState(false);

  useEffect(() => {
    const initializeState = async () => {
      const respUser = await axios.get(API_URL.concat(`user/${post.userId}`));
      setUser(respUser.data);
      setIsLoading(false);
    };
    initializeState();
  }, [post.userId]);

  return (
    <article className='post-wrapper shadow'>
      {isLoading && <Spinner />}
      <div className='post'>
        {user && (
          <>
            <img
              src={avatars[user.avatarId].icon}
              className='avatar'
              alt='avatar'
            />
            <div className='signature'>
              {capitalize(user.nickname)} the{' '}
              {capitalize(avatars[user.avatarId].name)}
            </div>
            <p className='timestamp'>{post.timestamp}</p>
            <div className='post-content shadow'>{post.content}</div>
            <section className='likesNcomments'>
              <p>
                {comments} {comments === 1 ? 'comment' : 'comments'}
              </p>
              <CommentButton setAreCommentsOpen={setAreCommentsOpen} />
              <p>
                {likes} {likes === 1 ? 'like' : 'likes'}
              </p>
              <LikeButton post={post} />
            </section>
            {areCommentsOpen && (
              <PostContext.Provider value={{ post }}>
                <Comments />
              </PostContext.Provider>
            )}
          </>
        )}
      </div>
    </article>
  );
};
