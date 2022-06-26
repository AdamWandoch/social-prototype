import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { Post } from './Post';
import { API_URL } from '../helpers/api_urls';
import axios from 'axios';

export const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(API_URL.concat('post/getall'));
      setIsLoading(false);
      setPosts(resp.data);
    };
    setInterval(() => {
      getPosts();
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        posts.map((post, index) => <Post key={index} post={post} />)
      )}
    </>
  );
};
