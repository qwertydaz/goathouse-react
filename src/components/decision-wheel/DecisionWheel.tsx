import React from 'react';
import SpinButton from './SpinButton';
import Wheel from './Wheel';

const DecisionWheel: React.FC = () => {
  return (
    <div className='decision-wheel'>
      <SpinButton />
      <Wheel />
    </div>
  );
};

export default DecisionWheel;
