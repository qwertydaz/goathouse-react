import { createSlice } from '@reduxjs/toolkit';
import { CellStyle } from 'ag-grid-community';

interface GoathouseState {
  isNavigationDisabled: boolean;
  agGridButtonStyle: CellStyle;
}

const initialState: GoathouseState = {
  isNavigationDisabled: false,
  agGridButtonStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
