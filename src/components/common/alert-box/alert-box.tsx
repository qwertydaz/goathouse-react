import React from 'react';
import './alert-box.css';

interface AlertBoxProps {
  title?: string;
  content?: React.ReactNode;
}

const AlertBox: React.FC<AlertBoxProps> = ({
  title = undefined,
  content = undefined,
}) => {
  return (
    <div className='alert-box'>
      <input type='checkbox' id='open-alert' className='alert__toggler' />
      <label className='alert__mask' htmlFor='open-alert'></label>
      <div className='alert'>
        <label className='alert__close' htmlFor='open-alert'></label>
        <div className='alert__content'>
          <h1 className='alert__title'>{title}</h1>
          {content}
          <label className='button' htmlFor='open-alert'>
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
