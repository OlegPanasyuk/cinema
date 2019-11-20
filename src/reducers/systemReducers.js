import { handleActions } from 'redux-actions';
import { SYSTEM } from '../actions/actionTypes';

const initialState = { isLoading: false };

function loadingStart(state) {
  return {
    ...state,
    isLoading: true,
  };
}

function loadingFinished(state) {
  return {
    ...state,
    isLoading: false,
  };
}

export default handleActions(
  {
    [SYSTEM.LOADING_START]: loadingStart,
    [SYSTEM.LOADING_FINISHED]: loadingFinished,
  },
  initialState
);
