import { useState } from 'react';
import { GlobalContext } from './contexts/GlobalContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { UserProfile } from './routes/UserProfile';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Error } from './routes/Error';
import { Navbar } from './components/Navbar/Navbar';
// import { config } from './components/Navbar/config';
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user-profile' element={<UserProfile />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
