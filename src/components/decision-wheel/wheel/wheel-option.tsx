import React from 'react';

interface WheelOptionProps {
  optionLabel: string;
  style: React.CSSProperties;
}

const WheelOption: React.FC<WheelOptionProps> = ({ optionLabel, style }) => {
  return (
    <div className='wheel-option' style={style}>
      <div className='option-label-container'>
        <span className='option-label'>
          {optionLabel}
        </span>
      </div>
    </div>
  );
};

export default WheelOption;
