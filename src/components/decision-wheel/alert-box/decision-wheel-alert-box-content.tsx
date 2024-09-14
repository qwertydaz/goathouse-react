import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedMovie } from '../../../store/selectors/movie-picker.selectors.ts';

const DecisionWheelAlertBoxContent: React.FC = () => {
  const selectedOption = useSelector(selectSelectedMovie);

  return (
    <div className='decision-wheel-alert-box-content'>
      <p>{selectedOption?.title || 'Lorem Ipsum'}</p>
    </div>
  );
};

export default DecisionWheelAlertBoxContent;
