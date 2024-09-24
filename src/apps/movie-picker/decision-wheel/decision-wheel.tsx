import './decision-wheel.css';
import React from 'react';
import SpinningWheel from './wheel/spinning-wheel';
import SpinButton from './spin-button/spin-button';
import DecisionWheelAlertBox from './alert-box/decision-wheel-alert-box';

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
