import { Movie } from './decision-wheel-types.ts';

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

export {
  colours,
  getPlaceholderMovies,
};
