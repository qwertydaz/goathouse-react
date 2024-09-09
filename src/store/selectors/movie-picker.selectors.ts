import { RootState } from '../store';

const selectSelectedMovie = (state: RootState) =>
  state.moviePicker.selectedMovie;
const selectSpinAngle = (state: RootState) => state.moviePicker.spinAngle;
const selectSpinComplete = (state: RootState) =>
  state.moviePicker.isSpinComplete;

export { selectSelectedMovie, selectSpinAngle, selectSpinComplete };
