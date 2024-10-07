import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedMovie } from '../../../../store/selectors/movie-picker.selectors';

const AlertBoxContent: React.FC = () => {
  const selectedOption = useSelector(selectSelectedMovie);

  return (
    <div className='decision-wheel-alert-box-content'>
      <p>{selectedOption?.title ?? 'No Movie ☹🚫'}</p>
    </div>
  );
};

export default AlertBoxContent;
