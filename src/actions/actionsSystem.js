import { SYSTEM } from './actionTypes';

export const startLoading = () => ({
  type: SYSTEM.LOADING_START,
});

export const finishLoading = () => ({
  type: SYSTEM.LOADING_FINISHED,
});

export default {
  startLoading,
  finishLoading,
};
