import { handleActions } from 'redux-actions';
import { AUTH } from '../actions/actionTypes';

const initialState = {
  isAuthorized: false,
  profile: {
    email: null,
    familyName: null,
    givenName: null,
    id: null,
    imageURL: null,
    name: null,
  },
  authResponse: {
    accessToken: null,
    idToken: null,
    scope: null,
    expiresIn: null,
    firstIssuedAt: null,
    expiresAt: null,
  },
};

const singInReducer = (state, { payload }) => ({
  ...state,
  isAuthorized: true,
  profile: {
    email: payload.profile.email,
    familyName: payload.profile.familyName,
    givenName: payload.profile.givenName,
    id: payload.profile.id,
    imageURL: payload.profile.imageURL,
    name: payload.profile.name,
  },
  authResponse: {
    accessToken: payload.authResponse.accessToken,
    idToken: payload.authResponse.idToken,
    scope: payload.authResponse.scope,
    expiresIn: payload.authResponse.expiresIn,
    firstIssuedAt: payload.authResponse.firstIssuedAt,
    expiresAt: payload.authResponse.expiresAt,
  },
});

const singOutReducer = state => ({
  ...state,
  isAuthorized: false,
  profile: {
    email: null,
    familyName: null,
    givenName: null,
    id: null,
    imageURL: null,
    name: null,
  },
  authResponse: {
    accessToken: null,
    idToken: null,
    scope: null,
    expiresIn: null,
    firstIssuedAt: null,
    expiresAt: null,
  },
});

export default handleActions(
  { [AUTH.SING_IN]: singInReducer, [AUTH.SING_OUT]: singOutReducer },
  initialState
);
