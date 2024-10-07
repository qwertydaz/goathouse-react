import React from 'react';
import MoviePicker from './components/movie-picker';
import Footer from './components/footer';
import Header from './components/header';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Header />

      <main className='main-content'>
        <MoviePicker />
      </main>

      <Footer />
    </div>
  );
};

export default App;
