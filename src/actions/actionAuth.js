import { AUTH } from './actionTypes';

export const singIn = (profile, authResponse) => ({
  type: AUTH.SING_IN,
  payload: { profile, authResponse },
});

export const singOut = () => ({
  type: AUTH.SING_IN,
});

export default {
  singOut,
  singIn,
};
