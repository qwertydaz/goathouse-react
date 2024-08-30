import { RootState } from '../store';

const selectSelectedMovie = (state: RootState) =>
  state.moviePicker.selectedMovie;
const selectSpinAngle = (state: RootState) => state.moviePicker.spinAngle;

export { selectSelectedMovie, selectSpinAngle };
