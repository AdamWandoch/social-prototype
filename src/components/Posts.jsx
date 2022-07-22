import React from 'react';
import { Post } from './Post';

export const Posts = ({ posts }) => {
  const comments = 123; // hard coded dummy value

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          likes={post.likes}
          comments={comments}
        />
      ))}
    </>
  );
};
