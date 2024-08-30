import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviePickerState {
  selectedMovie?: string;
  spinAngle: number;
}

const initialState: MoviePickerState = {
  selectedMovie: undefined,
  spinAngle: 0,
};

const moviePickerSlice = createSlice({
  name: 'movie-picker',
  initialState,
  reducers: {
    setSelectedMovie: (
      state: MoviePickerState,
      action: PayloadAction<string>,
    ) => {
      state.selectedMovie = action.payload;
    },
    setSpinAngle: (state: MoviePickerState, action: PayloadAction<number>) => {
      state.spinAngle = action.payload;
    },
  },
});

export const { setSelectedMovie, setSpinAngle } = moviePickerSlice.actions;

export default moviePickerSlice.reducer;
