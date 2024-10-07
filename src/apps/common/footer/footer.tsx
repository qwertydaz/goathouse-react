import 'footer.css';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='contact-info'>
        <p>Made by Dáire McDermott</p>
        <a href='mailto:daire@mcdermott.work'>daire@mcdermott.work</a>
      </div>
      <div className='credits'>
        <a href='https://www.flaticon.com/free-icons/goat' title='goat icons'>
          Goat icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Footer;
