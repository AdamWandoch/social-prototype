import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { UserProfile } from './routes/UserProfile';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { Error } from './routes/Error';
import './styles/App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user-profile' element={<UserProfile />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
