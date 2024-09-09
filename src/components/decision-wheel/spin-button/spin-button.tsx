import React, { useState } from 'react';
import {
  setSpinAngle,
  setSpinComplete,
} from '../../../store/reducers/movie-picker.reducer';
import { useDispatch } from 'react-redux';

const calculateSpinAngle = () => {
  const minAngle = 1800;
  return Math.ceil(Math.random() * 1800) + minAngle;
};

const SpinButton: React.FC = () => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);

    dispatch(setSpinComplete(false));

    const angle = calculateSpinAngle();
    dispatch(setSpinAngle(angle));

    setTimeout(() => {
      dispatch(setSpinComplete(true));
      setIsDisabled(false);
    }, 5000);
  };

  return (
    <button className='spin-button' onClick={handleClick} disabled={isDisabled}>
      spin
    </button>
  );
};

export default SpinButton;
