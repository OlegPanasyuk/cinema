import { handleActions } from 'redux-actions';
import { FILMS } from '../actions/actionTypes';

const initialState = {
  data: [],
};

function addDataReducer(state, {payload}) {
  return {
    ...state,
    data: payload
  }
}

export default handleActions(
  {
    [FILMS.REQUEST_FILMS_SUCCESS]: addDataReducer,
  },
  initialState
);
