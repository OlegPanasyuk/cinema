import { handleActions } from 'redux-actions';
import { FILMS } from '../actions/actionTypes';

const initialState = {
  data: [],
  error: {}
};

function addDataReducer(state, {payload}) {
  return {
    ...state,
    data: payload
  }
}

function errorUpdate(state, {payload}) {
  return {
    ...state,
    error: payload
  }
} 


export default handleActions(
  {
    [FILMS.REQUEST_FILMS_SUCCESS]: addDataReducer,
    [FILMS.REQUEST_FILMS_FAILED]: errorUpdate
  },
  initialState
);
