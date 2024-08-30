import React from 'react';
import AlertBox from '../../common/alert-box/alert-box';
import DecisionWheelAlertBoxContent from './decision-wheel-alert-box-content';

const DecisionWheelAlertBox: React.FC = () => {
  return <AlertBox title='Movie:' content={<DecisionWheelAlertBoxContent />} />;
};

export default DecisionWheelAlertBox;
