import React from 'react';
import { setSpinComplete, setSelectedMovie } from '../../../store/reducers/movie-picker.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpinComplete, selectWheelOptions } from '../../../store/selectors/movie-picker.selectors.ts';

const SpinButton: React.FC = () => {
  const dispatch = useDispatch();
  const wheelOptions = useSelector(selectWheelOptions);
  const spinComplete = useSelector(selectSpinComplete);

  const handleClick = () => {
    if (!spinComplete) return;

    const selectedMovieIndex = Math.floor(Math.random() * wheelOptions.length);
    dispatch(setSelectedMovie(wheelOptions[selectedMovieIndex]));
    dispatch(setSpinComplete(false));
  };

  return (
    <button className='spin-button' onClick={handleClick} disabled={!spinComplete}>
      spin
    </button>
  );
};

export default SpinButton;
