import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../consts/decision-wheel-types';

interface MoviePickerState {
  selectedMovie?: Movie;
  selectedIndex: number;
  isSpinning: boolean;
  wheelOptions: Movie[];
}

const initialState: MoviePickerState = {
  selectedMovie: undefined,
  selectedIndex: 0,
  isSpinning: false,
  wheelOptions: [],
};

const moviePickerSlice = createSlice({
  name: 'movie-picker',
  initialState,
  reducers: {
    setSelectedMovie: (state: MoviePickerState, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
    setSelectedIndex: (state: MoviePickerState, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
    setSpinning: (state: MoviePickerState, action: PayloadAction<boolean>) => {
      state.isSpinning = action.payload;
    },
    setWheelOptions: (state: MoviePickerState, action: PayloadAction<Movie[]>) => {
      state.wheelOptions = action.payload;
    },
  },
});

export const {
  setSelectedMovie,
  setSelectedIndex,
  setSpinning,
  setWheelOptions,
} = moviePickerSlice.actions;

export default moviePickerSlice.reducer;
