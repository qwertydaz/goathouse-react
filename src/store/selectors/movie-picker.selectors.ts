import { RootState } from '../store';

const selectSelectedMovie = (state: RootState) => state.moviePicker.selectedMovie;
const selectSpinComplete = (state: RootState) => state.moviePicker.spinComplete;
const selectWheelOptions = (state: RootState) => state.moviePicker.wheelOptions;

export {
  selectSelectedMovie,
  selectSpinComplete,
  selectWheelOptions,
};
