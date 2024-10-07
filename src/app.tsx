import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import MoviePicker from './pages/movie-picker/movie-picker';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <div className='app-container'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie-picker' element={<MoviePicker />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
