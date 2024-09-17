import React, { useCallback } from 'react';
import { setSpinning, setSelectedIndex } from '../../../store/reducers/movie-picker.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpinning, selectWheelOptions } from '../../../store/selectors/movie-picker.selectors.ts';

const SpinButton: React.FC = () => {
  const dispatch = useDispatch();
  const wheelOptions = useSelector(selectWheelOptions);
  const isSpinning = useSelector(selectSpinning);

  const handleClick = useCallback(() => {
    const selectedIndex = Math.floor(Math.random() * wheelOptions.length);
    dispatch(setSelectedIndex(selectedIndex));
    dispatch(setSpinning(true));
  }, [wheelOptions]);

  return (
    <button className='spin-button' onClick={handleClick} disabled={isSpinning}>
      spin
    </button>
  );
};

export default SpinButton;
