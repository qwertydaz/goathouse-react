import React from 'react';
import FriendsListGrid from '../../components/grids/friends-list-grid';
import MovieListsGrid from '../../components/grids/movie-lists-grid';

const Profile: React.FC = () => {
  return (
    <div className='profile'>
      <div className='row'>
        <div className='col-2'>
          <div className='bordered' style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <h4>Name</h4>
            <h4>Username</h4>
          </div>
          <div className='bordered' style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <h4>Bio</h4>
          </div>
        </div>

        <div className='col-1 '>
          <div className='bordered' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h4>Profile Picture</h4>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-2'>
          <h4>Movie Lists</h4>
          <MovieListsGrid readOnly />
        </div>

        <div className='col-1'>
          <h4>Friends List</h4>
          <FriendsListGrid />
        </div>
      </div>
    </div>
  );
};

export default Profile;
