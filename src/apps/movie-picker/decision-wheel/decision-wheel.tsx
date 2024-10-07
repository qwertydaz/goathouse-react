import './decision-wheel.css';
import React from 'react';
import SpinningWheel from './wheel/spinning-wheel.tsx';
import SpinButton from './spin-button/spin-button.tsx';
import AlertBox from './alert-box/alert-box.tsx';

const DecisionWheel: React.FC = () => {
  return (
    <div className='decision-wheel'>
      <SpinningWheel />
      <SpinButton />
      <AlertBox />
    </div>
  );
};

export default DecisionWheel;
