import { useState, useEffect, useContext } from 'react';
import { PostContext } from '../contexts/PostContext';
import { Comment } from './Comment';
import { API_URL } from '../helpers/urls';
import axios from 'axios';

// TODO: 24/07/2022 implement separate topic for each post to listen to comment updates and trigger re-render 

export const CommentsList = () => {
  const [comments, setComments] = useState();
  const { post } = useContext(PostContext);

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(API_URL.concat(`comment/${post.id}`));
      setComments(resp.data);
      // setCommentsCount(resp.data.length);
    };
    getComments();
  }, [post.comments]);

  return (
    <>
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </>
  );
};
