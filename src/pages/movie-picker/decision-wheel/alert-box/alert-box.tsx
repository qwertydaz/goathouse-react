import React from 'react';
import AlertBox from '../../../../components/alert-box/alert-box';
import AlertBoxContent from './alert-box-content';
import { useSelector } from 'react-redux';
import { selectSpinning } from '../../../../store/selectors/movie-picker.selectors';

const DecisionWheelAlertBox: React.FC = () => {
  const isSpinning = useSelector(selectSpinning);

  return (
    <AlertBox
      togglerClassName='spin-button'
      shouldToggleOpen={!isSpinning}
      hasConfetti={true}
      title='🎬'
      content={<AlertBoxContent />}
    />
  );
};

export default DecisionWheelAlertBox;
