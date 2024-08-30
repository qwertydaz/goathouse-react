import React from 'react';
import { setSpinAngle } from '../../../store/reducers/movie-picker.reducer';
import { useDispatch } from 'react-redux';

const calculateSpinAngle = () => {
  return Math.ceil(Math.random() * 3600);
};

const SpinButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSpinAngle(calculateSpinAngle()));
  };

  return (
    <button className='spin-button' onClick={handleClick}>
      spin
    </button>
  );
};

export default SpinButton;
