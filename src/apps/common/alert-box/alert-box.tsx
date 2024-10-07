import './alert-box.css';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

interface AlertBoxProps {
  togglerClassName: string;
  shouldToggleOpen: boolean;
  hasConfetti?: boolean;
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
  togglerClassName,
  shouldToggleOpen,
  hasConfetti = false,
  title = undefined,
  content = undefined,
}) => {
  const alertTogglerRef = useRef<HTMLInputElement | null>(null);

  const [isToggled, setIsToggled] = useState<boolean>(false);

  useEffect(() => {
    const toggler = document.querySelector(`.${togglerClassName}`);
    if (toggler) toggler.addEventListener('click', closeAlert);
    setIsToggled(true);

    return () => {
      if (toggler) toggler.removeEventListener('click', closeAlert);
      setIsToggled(false);
    };
  }, [togglerClassName]);

  useEffect(() => {
    if (isToggled && shouldToggleOpen) openAlert();
  }, [shouldToggleOpen]);

  const openAlert = useCallback(() => {
    alertTogglerRef.current = document.getElementById('open-alert') as HTMLInputElement;
    if (alertTogglerRef.current) {
      alertTogglerRef.current.checked = true;
    }
    if (hasConfetti) triggerConfetti();
  }, [hasConfetti]);

  const closeAlert = useCallback(() => {
    if (alertTogglerRef.current) {
      alertTogglerRef.current.checked = false;
    }
  }, []);

  const titleElement = useMemo(() => {
    return <h1 className='alert__title'>{title}</h1>
  }, [title]);

  return (
    <div className='alert-box'>
      <input type='checkbox' id='open-alert' className='alert__toggler' />
      <label className='alert__mask' htmlFor='open-alert'></label>
      <div className='alert'>
        <label className='alert__close' htmlFor='open-alert'></label>
        <div className='alert__content'>
          {title ? titleElement : null}
          {content}
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
