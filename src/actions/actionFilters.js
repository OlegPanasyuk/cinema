import { FILTERS } from './actionTypes';

export const setFiltersSearchRow = search => ({
  type: FILTERS.SEARCH_ROW,
  payload: search,
});

export const setFiltersNumberPage = page => ({
  type: FILTERS.NUMBER_PAGE,
  payload: page,
});

export const setFilterPlot = plot => ({
  type: FILTERS.PLOT,
  payload: plot,
});

export const setFilterType = type => ({
  type: FILTERS.TYPE,
  payload: type,
});

export default {
  setFiltersSearchRow,
  setFiltersNumberPage,
  setFilterPlot,
  setFilterType,
};
