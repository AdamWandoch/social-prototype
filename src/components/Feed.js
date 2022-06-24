import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../helpers/api_urls';
import { CurrentUser } from './CurrentUser';
import { PostEditForm } from './PostEditForm';

export const Feed = ({ userId, logout }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    axios.get(API_URL.concat(userId)).then((resp) => {
      setCurrentUser(resp.data);
    });
  }, []);

  return (
    <div className='feed'>
      {currentUser && <CurrentUser user={currentUser} signout={logout} />}
      {currentUser && <PostEditForm user={currentUser} />}
    </div>
  );
};
