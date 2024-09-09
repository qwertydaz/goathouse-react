import React from 'react';
import AlertBox from '../../common/alert-box/alert-box';
import DecisionWheelAlertBoxContent from './decision-wheel-alert-box-content';

const DecisionWheelAlertBox: React.FC = () => {
  return (
    <AlertBox
      togglerClassName='spin-button'
      delayInSeconds={5}
      confetti={true}
      title='🎬'
      content={<DecisionWheelAlertBoxContent />}
    />
  );
};

export default DecisionWheelAlertBox;
