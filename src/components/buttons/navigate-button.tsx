import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';

interface NavigateButtonProps {
  navigateTo: string;
  label?: string;
  disabled?: boolean;
  primary?: boolean;
  block?: boolean;
  gridAction?: boolean;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({
  navigateTo,
  label='→',
  disabled=false,
  primary=false,
  block=false,
  gridAction=false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Button
      label={label}
      onClick={handleClick}
      disabled={disabled}
      primary={primary}
      block={block}
      gridAction={gridAction}
    />
  );
};

export default NavigateButton;
