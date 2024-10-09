import React from 'react';
import MovieListsGrid from '../../components/grids/movie-lists-grid';
import NavigateButton from '../../components/buttons/navigate-button';

const MovieLists: React.FC = () => {
  return (
    <div className='movie-lists'>
      <div className='row'>
        <div className='col'>
          <div style={{ marginBottom: '1rem' }}>
            <MovieListsGrid />
          </div>

          <NavigateButton navigateTo='/movie-lists/create' label='Create New List' primary />
        </div>
      </div>
    </div>
  );
};

export default MovieLists;
