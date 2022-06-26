import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../helpers/api_urls';
import { CurrentUser } from './CurrentUser';
import { PostEditForm } from './PostEditForm';
import { Spinner } from './Spinner';
import { Posts } from './Posts';

export const Feed = ({ userId, logout }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(API_URL.concat('user/' + userId)).then((resp) => {
      setTimeout(() => {
        setIsLoading(false);
        setCurrentUser(resp.data);
      }, 1000);
    });
  }, []);

  return (
    <div className='feed'>
      {currentUser && <CurrentUser user={currentUser} signout={logout} />}
      {currentUser && <PostEditForm user={currentUser} />}
      {isLoading ? <Spinner /> : <Posts />}
    </div>
  );
};
