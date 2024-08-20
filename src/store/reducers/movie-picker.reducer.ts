import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoviePickerState {
  // state properties
}

const initialState: MoviePickerState = {
  // initial state
};

const moviePickerSlice = createSlice({
  name: 'movie-picker',
  initialState,
  reducers: {
    // actions
  },
});

export const {
  // actions
} = moviePickerSlice.actions;

export default moviePickerSlice.reducer;
