import { FILTERS } from './actionTypes';

export const setFiltersSearchRow = (search) => ({
    type: FILTERS.SEARCH_ROW,
    payload: search
})

export const setFiltersNumberPage = (page) => ({
    type: FILTERS.NUMBER_PAGE,
    payload: page
})

export default {
    setFiltersSearchRow,
    setFiltersNumberPage
}