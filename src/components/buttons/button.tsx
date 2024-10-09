import './button.css';
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
  important?: boolean;
  block?: boolean;
  gridAction?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled=false,
  primary=false,
  important=false,
  block=false,
  gridAction=false,
}) => {
  return (
    <button
      className={`button ${disabled ? 'disabled' : ''} ${primary ? 'primary' : ''} ${important ? 'important' : ''} ${block ? 'block' : ''} ${gridAction ? 'grid-action' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
