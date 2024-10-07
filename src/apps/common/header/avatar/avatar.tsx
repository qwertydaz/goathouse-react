import './avatar.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Avatar: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div className='avatar'>
      <button className='avatar-button' onClick={handleClick}>
        Profile
      </button>
    </div>
  );
};

export default Avatar;
