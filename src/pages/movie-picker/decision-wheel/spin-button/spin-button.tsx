import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSpinning, setSelectedIndex } from '../../../../store/reducers/movie-picker.reducer';
import { selectSpinning, selectWheelOptions } from '../../../../store/selectors/movie-picker.selectors';
import { setNavigationDisabled } from '../../../../store/reducers/goathouse.reducer';

const SpinButton: React.FC = () => {
  const dispatch = useDispatch();
  const wheelOptions = useSelector(selectWheelOptions);
  const isSpinning = useSelector(selectSpinning);

  const handleClick = useCallback(() => {
    const selectedIndex = Math.floor(Math.random() * wheelOptions.length);
    dispatch(setSelectedIndex(selectedIndex));
    dispatch(setSpinning(true));
    dispatch(setNavigationDisabled(true));
  }, [wheelOptions]);

  return (
    <button className='spin-button' onClick={handleClick} disabled={isSpinning}>
      spin
    </button>
  );
};

export default SpinButton;
