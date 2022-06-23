import { useState } from 'react';
import { SignIn } from './components/SignIn';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Feed } from './components/Feed';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div className='wrapper'>
      <Header />
      {user ? <Feed user={user}/> : <SignIn />}
      <Footer />
    </div>
  );
}

export default App;
