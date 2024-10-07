import React from 'react';
import AlertBox from '../../../common/alert-box/alert-box.tsx';
import AlertBoxContent from './alert-box-content.tsx';
import { useSelector } from 'react-redux';
import { selectSpinning } from '../../../../store/selectors/movie-picker.selectors.ts';

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
