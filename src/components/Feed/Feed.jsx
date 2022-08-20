import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { CurrentUser } from '../CurrentUser/CurrentUser';
import { PostEditForm } from '../PostEditForm/PostEditForm';
import { Posts } from '../Posts/Posts';
import { over } from 'stompjs';
import { FeedContext } from '../../contexts/FeedContext';
import { API_URL, WEBSOCKET_URL } from '../../helpers/urls';
import SockJS from 'sockjs-client';
import axios from 'axios';
import { useCallback } from 'react';

var stompClient = null;

export const Feed = () => {
  const { user } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const resp = await axios.get(API_URL.concat('post/getall'));
    setPosts(resp.data);
    setIsLoading(false);
  };

  const onConnected = useCallback(() => {
    stompClient.subscribe('/feed-clients', onMessageReceived);
  }, []);

  const onError = useCallback((err) => {
    console.log(err);
  }, []);

  const onMessageReceived = (payload) => {
    payload && setPosts(JSON.parse(payload.body));
  };

  const connect = useCallback(() => {
    let Sock = new SockJS(WEBSOCKET_URL);
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  }, [onConnected, onError]);

  const broadcastTrigger = () => {
    if (stompClient) {
      stompClient.send('/feed-trigger', {}, '[ feed reload event triggered ]');
    }
  };

  useEffect(() => {
    loadPosts();
    connect();
    setIsLoading(false);
  }, [connect]);

  return (
    <FeedContext.Provider value={{ broadcastTrigger }}>
      <div className='feed'>
        {user && (
          <>
            <CurrentUser />
            <PostEditForm broadcastTrigger={broadcastTrigger} />
          </>
        )}
        {!isLoading && <Posts posts={posts} />}
      </div>
    </FeedContext.Provider>
  );
};
