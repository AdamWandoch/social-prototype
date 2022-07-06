import React, { useEffect, useState } from 'react';
import { API_URL } from '../helpers/api_urls';
import { WEBSOCKET_URL } from '../helpers/api_urls';
import { CurrentUser } from './CurrentUser';
import { PostEditForm } from './PostEditForm';
import { Spinner } from './Spinner';
import { Posts } from './Posts';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';

var stompClient = null;

export const Feed = ({ userId, logout }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(API_URL.concat('user/' + userId)).then((resp) => {
      setCurrentUser(resp.data);
      setIsLoading(false);
    });
    fetchData();
    connect();
  }, []);

  const connect = () => {
    let Sock = new SockJS(WEBSOCKET_URL);
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    stompClient.subscribe('/feed-clients', onMessageReceived);
  };

  const onError = (err) => {
    console.log(err);
  };

  const broadcastTrigger = () => {
    if (stompClient) {
      stompClient.send('/feed-trigger', {}, '[ feed reload event triggered ]');
    }
  };

  const onMessageReceived = (payload) => {
    payload && setPosts(JSON.parse(payload.body));
  };

  const fetchData = async () => {
    const resp = await axios.get(API_URL.concat('post/getall'));
    console.log(resp.data);
    setPosts(resp.data);
    setIsLoading(false);
  };

  return (
    <div className='feed'>
      {currentUser && (
        <>
          <CurrentUser user={currentUser} signout={logout} />
          <PostEditForm
            user={currentUser}
            broadcastTrigger={broadcastTrigger}
          />
        </>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <Posts
          user={currentUser}
          posts={posts}
          broadcastTrigger={broadcastTrigger}
        />
      )}
    </div>
  );
};
