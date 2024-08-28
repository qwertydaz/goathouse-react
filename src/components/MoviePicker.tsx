import React from 'react';
import DecisionWheel from './decision-wheel/DecisionWheel';

const MoviePicker: React.FC = () => {
  return (
    <div className='movie-picker'>
      <DecisionWheel />
    </div>
  );
};

export default MoviePicker;
