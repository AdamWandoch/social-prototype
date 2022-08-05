import React, { useContext } from 'react';
import { Feed } from '../components/Feed/Feed';
import { SignIn } from '../components/SignIn/SignIn';
import { GlobalContext } from '../contexts/GlobalContext';

export const Home = () => {
  const { user, setUser } = useContext(GlobalContext);

  return <>{user ? <Feed /> : <SignIn setUser={setUser} />}</>;
};
