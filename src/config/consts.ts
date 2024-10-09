import { Friend, MovieList, Movie } from './types';

const colours = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

const getPlaceholderMovie = (id: number): Movie => {
  return {
    id,
    title: `Option ${id}`,
    overview: `Overview ${id}`,
    genres: [
      {
        id,
        name: `Genre ${id}`,
      },
    ],
    releaseDate: '01/01/2021',
  };
};

const getPlaceholderMovies = (numOfMovies: number): Movie[] => Array.from(
  { length: numOfMovies }, (_, index) => getPlaceholderMovie(index)
);

const placeholderMovieLists: MovieList[] = [
  { id: 0, name: 'Movie List 1', owners: ['Owner 1', ' Owner 2'] },
  { id: 1, name: 'Movie List 2', owners: ['Owner 1'] },
  { id: 2, name: 'Movie List 3', owners: ['Owner 1', ' Owner 2', ' Owner 3'] },
  { id: 3, name: 'Movie List 4', owners: ['Owner 1'] },
];

const placeholderFriendsList: Friend[] = [
  { id: 0, username: 'friend-one', name: 'Friend 1', mutuals: ['Friend 2', ' Friend 4'] },
  { id: 1, username: 'friend-two', name: 'Friend 2', mutuals: ['Friend 1'] },
  { id: 2, username: 'friend-three', name: 'Friend 3', mutuals: ['-'] },
  { id: 3, username: 'friend-four', name: 'Friend 4', mutuals: ['Friend 1'] },
];

export {
  colours,
  getPlaceholderMovies,
  placeholderMovieLists,
  placeholderFriendsList,
};
