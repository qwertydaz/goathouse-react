import { createSlice } from '@reduxjs/toolkit';

interface GoathouseState {
  isNavigationDisabled: boolean;
}

const initialState: GoathouseState = {
  isNavigationDisabled: false,
};

const goathouseSlice = createSlice({
  name: 'goathouse',
  initialState,
  reducers: {
    setNavigationDisabled: (state: GoathouseState, action) => {
      state.isNavigationDisabled = action.payload;
    },
  },
});

export const {
  setNavigationDisabled
} = goathouseSlice.actions;

export default goathouseSlice.reducer;
