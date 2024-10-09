import { RootState } from '../store';

const selectNavigationDisabled = (state: RootState) => state.goathouse.isNavigationDisabled;
const selectAgGridButtonStyle = (state: RootState) => state.goathouse.agGridButtonStyle;

export {
  selectNavigationDisabled,
  selectAgGridButtonStyle,
};
