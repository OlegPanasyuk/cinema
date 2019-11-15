import { handleActions } from 'redux-actions';
import { FILMS, FILTERS } from '../actions/actionTypes';

const initialState = {
  data: [],
  totalDataResults: 0,
  error: {},
  filters: {
    s: '',
    page: 1,
    plot: 'short',
    type: '',
  },
};

function addDataReducer(state, { payload }) {
  return {
    ...state,
    data: payload.Search,
    totalDataResults: +payload.totalResults,
    error: {},
  };
}

function errorUpdate(state, { payload }) {
  return {
    ...state,
    data: [],
    totalDataResults: 0,
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

function setPlotReducer(state, { payload }) {
  return {
    ...state,
    filters: {
      ...state.filters,
      plot: payload,
    },
  };
}

function setTypeReducer(state, { payload }) {
  return {
    ...state,
    filters: {
      ...state.filters,
      type: payload,
    },
  };
}

export default handleActions(
  {
    [FILMS.REQUEST_FILMS_SUCCESS]: addDataReducer,
    [FILMS.REQUEST_FILMS_FAILED]: errorUpdate,
    [FILTERS.SEARCH_ROW]: setSearchRowReducer,
    [FILTERS.NUMBER_PAGE]: setNumberRowReducer,
    [FILTERS.PLOT]: setPlotReducer,
    [FILTERS.TYPE]: setTypeReducer,
  },
  initialState
);
