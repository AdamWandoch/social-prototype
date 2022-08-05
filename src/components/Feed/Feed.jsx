import { useEffect, useState, useContext, createContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { CurrentUser } from '../CurrentUser/CurrentUser';
import { PostEditForm } from '../PostEditForm/PostEditForm';
import { Spinner } from '../Spinner/Spinner';
import { Posts } from '../Posts/Posts';
import { over } from 'stompjs';
import { FeedContext } from '../../contexts/FeedContext';
import { API_URL, WEBSOCKET_URL } from '../../helpers/urls';
import SockJS from 'sockjs-client';
import axios from 'axios';

var stompClient = null;

export const Feed = () => {
  const { user } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
    connect();
    setIsLoading(false);
  }, []);

  const loadPosts = async () => {
    const resp = await axios.get(API_URL.concat('post/getall'));
    setPosts(resp.data);
    setIsLoading(false);
  };

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

  const onMessageReceived = (payload) => {
    payload && setPosts(JSON.parse(payload.body));
  };

  const broadcastTrigger = () => {
    if (stompClient) {
      stompClient.send('/feed-trigger', {}, '[ feed reload event triggered ]');
    }
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
