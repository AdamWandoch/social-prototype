import React from 'react';
import { Post } from './Post';

export const Posts = ({ user, posts, broadcastTrigger }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          currentUser={user}
          broadcastTrigger={broadcastTrigger}
        />
      ))}
    </>
  );
};
