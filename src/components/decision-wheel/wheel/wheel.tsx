import React, { CSSProperties, useEffect } from 'react';
import WheelOption from './wheel-option';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpinAngle } from '../../../store/selectors/movie-picker.selectors';
import { colours } from '../../../consts/decision-wheel-consts';
import { setSelectedMovie } from '../../../store/reducers/movie-picker.reducer';

const Wheel: React.FC = () => {
  const [wheelOptionStyles, setWheelOptionStyles] = React.useState<
    CSSProperties[]
  >([]);

  const dispatch = useDispatch();
  const spinAngle = useSelector(selectSpinAngle);

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 677777 777777 877777 977777',
    'Option 77777777777777777777',
  ];

  const calculateWheelOptionStyles = () => {
    const angleSlice = 360 / options.length;

    return options.map((_, optionIndex) => ({
      backgroundColor: colours[optionIndex % colours.length],
      transform: `rotate(${optionIndex * angleSlice}deg)`,
    }));
  };

  const getSelectedOption = (angle: number) => {
    const normalizedAngle = ((angle % 360) + 360) % 360;
    const angleSlice = 360 / options.length;
    const selectedIndex = Math.floor(normalizedAngle / angleSlice);
    return options[selectedIndex];
  };

  useEffect(() => {
    setWheelOptionStyles(calculateWheelOptionStyles());
  }, [options.length]);

  useEffect(() => {
    const selected = getSelectedOption(spinAngle);
    dispatch(setSelectedMovie(selected));
  }, []);

  return (
    <div className='wheel' style={{ transform: `rotate(${spinAngle}deg)` }}>
      {options.map((option, index) => (
        <WheelOption
          key={option}
          optionLabel={option}
          style={wheelOptionStyles[index]}
        />
      ))}
    </div>
  );
};

export default Wheel;
