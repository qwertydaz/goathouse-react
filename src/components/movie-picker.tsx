import React from 'react';
import DecisionWheel from './decision-wheel/decision-wheel';

const MoviePicker: React.FC = () => {
  return (
    <div className='movie-picker'>
      <DecisionWheel />
    </div>
  );
};

export default MoviePicker;
