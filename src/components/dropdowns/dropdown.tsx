import './dropdown.css';
import React from 'react';
import AsyncSelect from 'react-select/async';
import { DropdownOption } from '../../config/types';

interface DropdownProps {
  getOptions: (inputData: string) => Promise<DropdownOption[]>
}

const Dropdown: React.FC<DropdownProps> = ({
  getOptions,
}) => {
  const loadOptions = async (inputValue: string) => getOptions(inputValue);

  return (
    <div className='dropdown'>
      <AsyncSelect cacheOptions defaultOptions loadOptions={loadOptions} />
    </div>
  );
};

export default Dropdown;
