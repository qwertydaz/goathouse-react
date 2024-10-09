import React from 'react';
import { DropdownOption } from '../../config/types';
import { placeholderMovieLists } from '../../config/consts';
import Dropdown from './dropdown';

const MovieListDropdown: React.FC = () => {
  const getMovieLists = async (inputValue: string): Promise<DropdownOption[]> => {
    return placeholderMovieLists
      .filter((movieList) => movieList.name.toLowerCase().includes(inputValue.toLowerCase()))
      .map((movieList) => ({
        value: movieList.id.toString(),
        label: movieList.name,
      }));
  };

  return (
    <div className='movie-list-dropdown'>
      <Dropdown getOptions={getMovieLists} />
    </div>
  );
};

export default MovieListDropdown;
