import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Goathouse from './apps/goathouse/goathouse';
import MoviePicker from './apps/movie-picker/movie-picker';
import Header from './apps/common/header/header';
import Navbar from './apps/common/navbar/navbar';
import Footer from './apps/common/footer/footer';
import { useSelector } from 'react-redux';
import { selectSpinning } from './store/selectors/movie-picker.selectors';

const App: React.FC = () => {
  const [isNavbarDisabled, setIsNavbarDisabled] = useState(false);

  const isSpinning = useSelector(selectSpinning);

  useEffect(() => {
    setIsNavbarDisabled(isSpinning);
  }, [isSpinning]);

  return (
    <>
      <Header />

      <Router>
        <div className='app-container'>
          <Navbar disabled={isNavbarDisabled}/>

          <Routes>
            <Route path='/' element={<Goathouse />} />
            <Route path='/movie-picker' element={<MoviePicker />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </>
  );
};

export default App;
