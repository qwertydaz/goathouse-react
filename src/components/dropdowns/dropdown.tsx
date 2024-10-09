import './dropdowns.css';
import React from 'react';
import AsyncSelect from 'react-select/async';
import { DropdownOption } from '../../config/types';

interface DropdownProps {
  getOptions: (inputData: string) => Promise<DropdownOption[]>
  placeholder?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  getOptions,
  placeholder,
}) => {
  const loadOptions = async (inputValue: string) => getOptions(inputValue);

  return (
    <div className='dropdown'>
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        placeholder={placeholder || 'Select...'}
      />
    </div>
  );
};

export default Dropdown;
