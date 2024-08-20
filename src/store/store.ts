import { configureStore } from '@reduxjs/toolkit';
import moviePickerReducer from './reducers/movie-picker.reducer';

const store = configureStore({
  reducer: {
    moviePicker: moviePickerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
