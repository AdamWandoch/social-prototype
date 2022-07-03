import React, { useEffect, useState } from 'react';
import { Spinner } from './Spinner';
import { Post } from './Post';
import { API_URL } from '../helpers/api_urls';
import axios from 'axios';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

// TODO: implement websocket client here

var stompClient = null;

export const Posts = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const connect = () => {
    let Sock = new SockJS('http://localhost:5000/ws'); //try :5000
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    stompClient.subscribe('/feed-update/public', onFeedUpdating);
  };

  const onFeedUpdating = () => {
    fetchData();
    setIsLoading(false);
  };

  const onError = (err) => {
    console.log(err);
  };

  const fetchData = async () => {
    const resp = await axios.get(API_URL.concat('post/getall'));
    setPosts(resp.data);
  };

  useEffect(() => {
    connect();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        posts.map((post, index) => (
          <Post key={index} post={post} currentUser={user} />
        ))
      )}
    </>
  );
};
