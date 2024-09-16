import React, { useEffect, useRef, useState } from 'react';
import './alert-box.css';
import confetti from 'canvas-confetti';
import { useSelector } from 'react-redux';
import { selectSpinning } from '../../../store/selectors/movie-picker.selectors.ts';

interface AlertBoxProps {
  togglerClassName: string;
  confetti?: boolean;
  title?: string;
  content?: React.ReactNode;
}

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const AlertBox: React.FC<AlertBoxProps> = ({
  togglerClassName = undefined,
  confetti = false,
  title = undefined,
  content = undefined,
}) => {
  const alertTogglerRef = useRef<HTMLInputElement | null>(null);
  const [isToggling, setIsToggling] = useState(false);

  const isSpinning = useSelector(selectSpinning);

  let titleElement;

  const setUpEventListeners = () => {
    const toggler = document.querySelector(`.${togglerClassName}`);
    alertTogglerRef.current = document.getElementById(
      'open-alert',
    ) as HTMLInputElement;

    const handleOpenEvent = () => {
      if (isToggling) return;

      setIsToggling(true);

      setTimeout(() => {
        if (alertTogglerRef.current) {
          alertTogglerRef.current.checked = !alertTogglerRef.current.checked;
        }
        setIsToggling(false);

        if (confetti) triggerConfetti();
      });
    };

    if (toggler) toggler.addEventListener('click', handleOpenEvent);

    return () => {
      if (toggler) toggler.removeEventListener('click', handleOpenEvent);
    };
  }

  useEffect(() => {
    setUpEventListeners();
  }, [togglerClassName, isToggling]);

  if (title) titleElement = <h1 className='alert__title'>{title}</h1>;

  return (
    <div className='alert-box'>
      <input type='checkbox' id='open-alert' className='alert__toggler' />
      <label className='alert__mask' htmlFor='open-alert'></label>
      <div className='alert'>
        <label className='alert__close' htmlFor='open-alert'></label>
        <div className='alert__content'>
          {titleElement}
          {content}
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
