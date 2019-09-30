import httpService from './HTTPService';

export const getFilms = ({ query = {}}) => {
  return httpService.get({
    url: 'http://www.omdbapi.com/',
    query: {...query, apikey: '467ce186'}
  });
}