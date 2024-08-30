import React from 'react';
import './decision-wheel.css';
import SpinButton from './spin-button/spin-button';
import Wheel from './wheel/wheel';
import DecisionWheelAlertBox from './alert-box/decision-wheel-alert-box';

const DecisionWheel: React.FC = () => {
  return (
    <div className='decision-wheel'>
      <SpinButton />
      <Wheel />
      <DecisionWheelAlertBox />
    </div>
  );
};

export default DecisionWheel;
