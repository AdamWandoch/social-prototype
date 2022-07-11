import React, { useEffect, useState, useContext, createContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { CurrentUser } from './CurrentUser';
import { PostEditForm } from './PostEditForm';
import { Spinner } from './Spinner';
import { Posts } from './Posts';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';

var stompClient = null;
export const FeedContext = createContext({});

export const Feed = () => {
  const { user } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
    connect();
    setIsLoading(false);
  }, []);

  const connect = () => {
    // let Sock = new SockJS(WEBSOCKET_URL);
    let Sock = new SockJS(process.env.REACT_APP_WEBSOCKET_URL);
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
    const resp = await axios.get(
      process.env.REACT_APP_API_URL.concat('post/getall')
    );
    console.log(resp.data);
    setPosts(resp.data);
    setIsLoading(false);
  };

  return (
    <FeedContext.Provider value={{ broadcastTrigger }}>
      <div className='feed'>
        {user && (
          <>
            <CurrentUser />
            <PostEditForm broadcastTrigger={broadcastTrigger} />
          </>
        )}
        {isLoading ? <Spinner /> : <Posts posts={posts} />}
      </div>
    </FeedContext.Provider>
  );
};
