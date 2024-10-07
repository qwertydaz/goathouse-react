import React from 'react';
import './decision-wheel.css';
import SpinningWheel from './wheel/spinning-wheel.tsx';
import SpinButton from './spin-button/spin-button.tsx';
import DecisionWheelAlertBox from './alert-box/decision-wheel-alert-box.tsx';

const DecisionWheel: React.FC = () => {
  return (
    <div className='decision-wheel'>
      <SpinningWheel />
      <SpinButton />
      <DecisionWheelAlertBox />
    </div>
  )
};

export default DecisionWheel;
