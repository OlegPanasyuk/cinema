import LocalStorageService from './LocalStorageService';

const KEY = 'favoriteItems';

function favoriteItemsCombiner(id) {
  let favoriteItems = Array.from(LocalStorageService.get(KEY));
  if (favoriteItems) {
    if (favoriteItems.includes && favoriteItems.includes(id)) {
      favoriteItems = favoriteItems.filter(el => el !== id);
    } else {
      favoriteItems.push(id);
    }
  } else {
    favoriteItems = [];
    favoriteItems.push(id);
  }
  LocalStorageService.set(KEY, favoriteItems);
  return favoriteItems;
}

export default { favoriteItemsCombiner };
