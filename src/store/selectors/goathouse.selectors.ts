import { RootState } from '../store';

const selectNavigationDisabled = (state: RootState) => state.goathouse.isNavigationDisabled;

export {
  selectNavigationDisabled,
};
