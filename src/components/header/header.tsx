import './header.css';
import React from 'react';
import Avatar from './avatar/avatar';
import Logo from './logo/logo';

const Header: React.FC = () => {
  return (
    <div className='header' style={{ display: 'flex' }}>
      <div className='header-left'>
        <Logo />
        <div className='title'>Goathouse</div>
      </div>

      <div className='header-right'>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
