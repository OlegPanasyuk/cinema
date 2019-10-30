import { handleActions } from 'redux-actions';
import { FILMS, FILTERS } from '../actions/actionTypes';

const initialState = {
  data: [],
  totalDataResults: 0,
  error: {},
  filters: {
    s: '',
    page: 1,
  },
};

function addDataReducer(state, { payload }) {
  return {
    ...state,
    data: payload.Search,
    totalDataResults: +payload.totalResults,
  };
}

function errorUpdate(state, { payload }) {
  return {
    ...state,
    error: payload,
  };
}

function setSearchRowReducer(state, { payload }) {
  return {
    ...state,
    filters: {
      ...state.filters,
      s: payload,
    },
  };
}

function setNumberRowReducer(state, { payload }) {
  return {
    ...state,
    filters: {
      ...state.filters,
      page: payload,
    },
  };
}

export default handleActions(
  {
    [FILMS.REQUEST_FILMS_SUCCESS]: addDataReducer,
    [FILMS.REQUEST_FILMS_FAILED]: errorUpdate,
    [FILTERS.SEARCH_ROW]: setSearchRowReducer,
    [FILTERS.NUMBER_PAGE]: setNumberRowReducer,
  },
  initialState
);
