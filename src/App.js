import { useState } from 'react';
import { SignIn } from './components/SignIn';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Feed } from './components/Feed';
import './App.css';

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className='wrapper'>
      <Header />
      {userId ? (
        <Feed userId={userId} logout={setUserId} />
      ) : (
        <SignIn setUserId={setUserId} />
      )}
      <Footer />
    </div>
  );
}

export default App;
