import './movie-picker.css';
import React from 'react';
import DecisionWheel from './decision-wheel/decision-wheel';
import MovieListDropdown from '../../components/dropdowns/movie-list-dropdown';

const MoviePicker: React.FC = () => {
  return (
    <div className='movie-picker'>
      <div className='movie-list-dropdown-container'>
        <MovieListDropdown />
      </div>

      <div className='wheel-container'>
        <DecisionWheel />
      </div>
    </div>
  );
};

export default MoviePicker;
