import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './button';

interface DeleteButtonProps {
  navigateTo?: string;
  label?: string;
  disabled?: boolean;
  block?: boolean;
  gridAction?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  navigateTo,
  label='✖',
  disabled=false,
  block=false,
  gridAction=false,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) navigate(navigateTo);
    console.log('Delete button clicked');
  };

  return (
    <Button
      label={label}
      onClick={handleClick}
      disabled={disabled}
      important
      block={block}
      gridAction={gridAction}
    />
  );
};

export default DeleteButton;
