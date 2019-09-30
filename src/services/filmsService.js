import httpService from './HTTPService';

export const getFilms = ({ query = {}}) => {
  return httpService.get({
    url: 'http://www.omdbapi.com/',
    query: {s: 'Guardians', page: 1, apikey: '467ce186'}
  });
}