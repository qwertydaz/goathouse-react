import React, { useEffect, useRef } from 'react';

interface WheelOptionProps {
  optionLabel: string;
  style: React.CSSProperties;
}

const getLabelStyle = (label: HTMLSpanElement) => {
  const parent = label.parentElement;
  if (!parent) return 'rotate(45deg)';

  const parentWidth = parent.clientWidth;
  const parentHeight = parent.clientHeight;
  const labelWidth = label.scrollWidth;
  const labelHeight = label.scrollHeight;

  const scale = Math.min(
    parentWidth / labelWidth,
    parentHeight / labelHeight,
    1
  );

  return `rotate(45deg) scale(${scale})`;
}

const WheelOption: React.FC<WheelOptionProps> = ({ optionLabel, style }) => {
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const label = labelRef.current;
    if (label) label.style.transform = getLabelStyle(label);
  }, [optionLabel]);

  return (
    <div className='wheel-option' style={style}>
      <span className='option-label' ref={labelRef}>{optionLabel}</span>
    </div>
  );
};

export default WheelOption;
