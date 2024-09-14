import React from 'react';
import SpinningWheel from './wheel/spinning-wheel.tsx';
import SpinButton from './spin-button/spin-button.tsx';
import DecisionWheelAlertBox from './alert-box/decision-wheel-alert-box.tsx';

const DecisionWheel: React.FC = () => {
  return (
    <>
      <SpinningWheel />
      <SpinButton />
      <DecisionWheelAlertBox />
    </>
  )
};

export default DecisionWheel;
