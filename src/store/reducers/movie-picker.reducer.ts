import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviePickerState {
  selectedMovie?: string;
  spinAngle: number;
  isSpinComplete: boolean;
}

const initialState: MoviePickerState = {
  selectedMovie: undefined,
  spinAngle: 0,
  isSpinComplete: false,
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
    setSpinComplete: (
      state: MoviePickerState,
      action: PayloadAction<boolean>,
    ) => {
      state.isSpinComplete = action.payload;
    },
  },
});

export const { setSelectedMovie, setSpinAngle, setSpinComplete } =
  moviePickerSlice.actions;

export default moviePickerSlice.reducer;
