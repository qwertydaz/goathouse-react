import './movie-picker.css';
import React from 'react';
import DecisionWheel from './decision-wheel/decision-wheel';
import MovieListDropdown from '../../components/dropdowns/movie-list-dropdown';

const MoviePicker: React.FC = () => {
  return (
    <div className='movie-picker'>
      <div className='row' style={{ width: '100%' }}>
        <div className='col'>
          <div className='row'>
            <div className='col'>
              <h4>Pick your Movie List:</h4>
              <MovieListDropdown />
            </div>
          </div>

          <div className='row'>
            <div className='col' style={{ display: 'flex', justifyContent: 'center'}}>
              <DecisionWheel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePicker;
