import React, { useCallback, useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useDispatch, useSelector } from 'react-redux';
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';
import { colours, getPlaceholderMovies } from '../../../../config/consts';
import {
  selectSelectedIndex,
  selectSpinning,
  selectWheelOptions,
} from '../../../../store/selectors/movie-picker.selectors';
import {
  setSelectedMovie,
  setSpinning,
  setWheelOptions,
} from '../../../../store/reducers/movie-picker.reducer';
import { setNavigationDisabled } from '../../../../store/reducers/goathouse.reducer';

const SpinningWheel: React.FC = () => {
  const [wheelData, setWheelData] = useState<WheelData[]>([{}]);

  const dispatch = useDispatch();
  const wheelOptions = useSelector(selectWheelOptions);
  const isSpinning = useSelector(selectSpinning);
  const selectedIndex = useSelector(selectSelectedIndex);

  const handleStopSpinning = useCallback(() => {
    dispatch(setSpinning(false));
    dispatch(setNavigationDisabled(false));
    dispatch(setSelectedMovie(wheelOptions[selectedIndex]));
  }, [wheelOptions, selectedIndex]);

  useEffect(() => {
    dispatch(setWheelOptions(getPlaceholderMovies(7)));
  }, []);

  useEffect(() => {
    if (wheelOptions?.length === 0) setWheelData([{}]);
    else setWheelData(wheelOptions.map(option => ({ option: option.title })));
  }, [wheelOptions]);

  return (
    <div className='spinning-wheel'>
      <Wheel
        mustStartSpinning={isSpinning}
        prizeNumber={selectedIndex}
        data={wheelData}
        onStopSpinning={handleStopSpinning}
        backgroundColors={colours}
        outerBorderColor='#ccc'
        outerBorderWidth={5}
        innerBorderColor='#f2f2f2'
        innerBorderWidth={20}
        innerRadius={0}
        radiusLineColor='#dedede'
        radiusLineWidth={5}
        fontSize={20}
        textDistance={60}
      />
    </div>
  );
};

export default SpinningWheel;
