import React from 'react';

interface WheelOptionProps {
  optionLabel: string;
  style: React.CSSProperties;
}

const WheelOption: React.FC<WheelOptionProps> = ({ optionLabel, style }) => {
  return (
    <div className='wheel-option' style={style}>
      <span className='option-label'>{optionLabel}</span>
    </div>
  );
};

export default WheelOption;
