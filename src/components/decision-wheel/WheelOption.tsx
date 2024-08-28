import React from 'react';

interface WheelOptionProps {
  key?: string;
  optionText: string;
  style: React.CSSProperties;
}

const WheelOption: React.FC<WheelOptionProps> = ({
  key = undefined,
  optionText,
  style,
}) => {
  return (
    <div
      className='wheel-option'
      key={key}
      style={style}
    >
      <span>
        {optionText}
      </span>
    </div>
  );
};

export default WheelOption;
