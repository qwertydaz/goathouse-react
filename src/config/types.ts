type MovieResponse = {
  adult: boolean,
  backdropPath: string,
  belongsToCollection: {
    id: number,
    name: string,
    posterPath: string,
    backdropPath: string,
  },
  budget: number,
  genres: {
    id: number,
    name: string,
  }[],
  homepage: string,
  id: number,
  imdbId: string,
  originCountry: string[],
  originalLanguage: string,
  originalTitle: string,
  overview: string,
  popularity: number,
  posterPath: string,
  productionCompanies: {
    id: number,
    logoPath: string,
    name: string,
    originCountry: string,
  }[],
  releaseDate: string,
  revenue: number,
  runtime: number,
  spokenLanguages: {
    englishName: string,
    iso6391: string,
    name: string,
  }[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  voteAverage: number,
  voteCount: number,
};

type ShortMovieResponse = {
  adult: boolean,
  backdropPath: string,
  genreIds: number[],
  id: number,
  originalLanguage: string,
  originalTitle: string,
  overview: string,
  popularity: number,
  posterPath: string,
  releaseDate: string,
  title: string,
  video: boolean,
  voteAverage: number,
  voteCount: number,
};

type PageableMovieResponse = {
  page: number,
  results: Movie[],
  totalPages: number,
  totalResults: number,
};

type Movie = {
  id: number,
  title: string,
  overview: string,
  genres: {
    id: number,
    name: string,
  }[],
  releaseDate: string,
};

type MovieList = {
  id: number;
  name: string;
  owners: string[];
};

type Friend = {
  id: number;
  username: string;
  name: string;
  mutuals: string[];
};

export type {
  Movie,
  MovieResponse,
  ShortMovieResponse,
  PageableMovieResponse,
  MovieList,
  Friend,
};
