type MovieResponse = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
  },
  budget: number,
  genres: {
    id: number,
    name: string,
  }[],
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
  }[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: {
    english_name: string,
    iso_639_1: string,
    name: string,
  }[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
};

type ShortMovieResponse = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
};

type PageableMovieResponse = {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number,
};

type Movie = {
  id: number,
  title: string,
  overview: string,
  genres: {
    id: number,
    name: string,
  }[],
  release_date: string,
};

export type {
  MovieResponse,
  ShortMovieResponse,
  PageableMovieResponse,
  Movie,
};
