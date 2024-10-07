import './navbar.css';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Tabs from './tabs';

interface NavbarProps {
  disabled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  disabled = false,
}) => {
  const navbarRef = useRef<HTMLUListElement>(null);
  const navbarSelectorRef = useRef<HTMLDivElement>(null);
  const [showSelector, setShowSelector] = useState(true);

  const location = useLocation();
  const navbarPaths = ['/', '/movie-picker'];

  const updateSelectorPosition = (activeItem: HTMLElement) => {
    const activeWidthNewAnimWidth = activeItem.clientWidth;
    const itemPosNewAnimLeft = activeItem.offsetLeft;

    if (navbarSelectorRef.current) {
      navbarSelectorRef.current.style.left = `${itemPosNewAnimLeft}px`;
      navbarSelectorRef.current.style.width = `${activeWidthNewAnimWidth}px`;
    }
  };

  const setupSelector = () => {
    const tabsNewAnim = navbarRef.current;
    if (!tabsNewAnim) return;

    const activeItemNewAnim = tabsNewAnim.querySelector('.active') as HTMLElement;
    if (activeItemNewAnim) updateSelectorPosition(activeItemNewAnim);

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === 'A') {
        const activeItem = tabsNewAnim.querySelector('.active') as HTMLElement;

        if (activeItem) activeItem.classList.remove('active');
        target.parentElement?.classList.add('active');

        updateSelectorPosition(target.parentElement as HTMLElement);
      }
    };

    tabsNewAnim.addEventListener('click', handleClick);

    return () => {
      tabsNewAnim.removeEventListener('click', handleClick);
    };
  };

  useEffect(() => {
    if (navbarPaths.includes(location.pathname) && !disabled) setShowSelector(true);
    else setShowSelector(false);

    return setupSelector();
  }, [location, disabled]);

  return (
    <div className={disabled ? 'navbar disabled' : 'navbar'}>
      <nav>
        <div className={showSelector ? 'navbar-selector' : 'navbar-selector hidden'} ref={navbarSelectorRef}></div>
        <Tabs navbarRef={navbarRef} location={location} />
      </nav>
    </div>
  );
};

export default Navbar;
