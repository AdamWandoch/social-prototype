import React, { useState } from 'react';
import { Feed } from '../components/Feed';
import { SignIn } from '../components/SignIn';

export const Home = () => {
  const [userId, setUserId] = useState(null);

  return (
    <>
      {userId ? (
        <Feed userId={userId} logout={setUserId} />
      ) : (
        <SignIn setUserId={setUserId} />
      )}
    </>
  );
};
