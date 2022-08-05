import { useState, useEffect, useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import { API_URL } from '../../helpers/urls';
import Comment from '../Comment/Comment'
import axios from 'axios';

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
