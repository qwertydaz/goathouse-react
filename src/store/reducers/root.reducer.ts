import { combineReducers } from '@reduxjs/toolkit';
import moviePickerReducer from './movie-picker.reducer';
import goathouseReducer from './goathouse.reducer';

const rootReducer = combineReducers({
  goathouse: goathouseReducer,
  moviePicker: moviePickerReducer,
});

export default rootReducer;
