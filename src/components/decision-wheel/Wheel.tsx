import React, { CSSProperties, useEffect } from 'react';
import WheelOption from './WheelOption';

const DecisionWheel: React.FC = () => {
  const [wheelOptionStyles, setWheelOptionStyles] = React.useState<CSSProperties[]>([]);

  const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  const options = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
  ];

  // TODO: look into scss
  const calculateWheelOptionStyles = () => {
    const angleSlice = 360 / options.length;

    const calculatedWheelOptionStyles: CSSProperties[] = [];

    options.forEach((_, optionIndex) => {
      let backgroundColor = colours[optionIndex % colours.length];
      let transform = `rotate(${angleSlice * optionIndex}deg)`;

      document.documentElement.style.setProperty('--wheel-option-color', backgroundColor);
      document.documentElement.style.setProperty('--wheel-option-index', optionIndex.toString());

      calculatedWheelOptionStyles.push({
        backgroundColor: backgroundColor,
        transform: transform,
      });
    });

    return calculatedWheelOptionStyles;
  }

  useEffect(() => {
    setWheelOptionStyles(calculateWheelOptionStyles());
  }, [options]);

  return (
    <div className='wheel'>
      {options.map((option, index) => (
        <WheelOption
          key={option}
          optionText={option}
          style={wheelOptionStyles[index]}
        />
      ))}
    </div>
  );
};

export default DecisionWheel;
