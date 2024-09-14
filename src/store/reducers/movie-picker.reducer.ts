import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../consts/decision-wheel-types.ts';

interface MoviePickerState {
  selectedMovie?: Movie;
  spinComplete: boolean;
  wheelOptions: Movie[];
}

const initialState: MoviePickerState = {
  selectedMovie: undefined,
  spinComplete: false,
  wheelOptions: [],
};

const moviePickerSlice = createSlice({
  name: 'movie-picker',
  initialState,
  reducers: {
    setSelectedMovie: (state: MoviePickerState, action: PayloadAction<Movie>) => {
      state.selectedMovie = action.payload;
    },
    setSpinComplete: (state: MoviePickerState, action: PayloadAction<boolean>) => {
      state.spinComplete = action.payload;
    },
    setWheelOptions: (state: MoviePickerState, action: PayloadAction<Movie[]>) => {
      state.wheelOptions = action.payload;
    },
  },
});

export const {
  setSelectedMovie,
  setSpinComplete,
  setWheelOptions,
} = moviePickerSlice.actions;

export default moviePickerSlice.reducer;
