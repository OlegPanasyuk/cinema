import { handleActions } from 'redux-actions';
import { FILM } from '../actions/actionTypes';

const initialState = {
    film: {}
}

const showFilmReducer = (state, { payload }) => {
    const {Response, ...rest} = payload;

    return {
        ...state,
        film: {...rest}
    }
}

const clearFilmReducer = (state) => {
    return {
        ...state,
        film: {}
    }
}


export default handleActions({
    [FILM.REQUEST_FILM_SUCCESS]: showFilmReducer,
    [FILM.REQUEST_FILM_FAILED]: clearFilmReducer,
    [FILM.CLEAR_FILM_INFO]: clearFilmReducer
}, initialState);