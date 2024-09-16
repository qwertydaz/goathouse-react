import { RootState } from '../store';

const selectSelectedMovie = (state: RootState) => state.moviePicker.selectedMovie;
const selectSelectedIndex = (state: RootState) => state.moviePicker.selectedIndex;
const selectSpinning = (state: RootState) => state.moviePicker.isSpinning;
const selectWheelOptions = (state: RootState) => state.moviePicker.wheelOptions;

export {
  selectSelectedMovie,
  selectSelectedIndex,
  selectSpinning,
  selectWheelOptions,
};
