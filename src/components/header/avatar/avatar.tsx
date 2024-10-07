import './avatar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNavigationDisabled } from '../../../store/selectors/goathouse.selectors';

const Avatar: React.FC = () => {
  const isNavigationDisabled = useSelector(selectNavigationDisabled);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div className='avatar'>
      <button className='avatar-button' onClick={handleClick} disabled={isNavigationDisabled}>
        Profile
      </button>
    </div>
  );
};

export default Avatar;
