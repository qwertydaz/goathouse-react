import React from 'react';
import { Link, Location } from 'react-router-dom';

interface TabsProps {
  navbarRef: React.RefObject<HTMLUListElement>;
  location: Location<any>;
}

const Tabs: React.FC<TabsProps> = ({
  navbarRef,
  location,
}) => {
  return (
    <ul ref={navbarRef}>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to={'/'}>Home</Link>
      </li>
      <li className={location.pathname === '/movie-picker' ? 'active' : ''}>
        <Link to={'/movie-picker'}>Movie Picker</Link>
      </li>
    </ul>
  );
};

export default Tabs;
