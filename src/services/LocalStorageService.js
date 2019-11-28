const get = itemName => {
  const item = localStorage.getItem(itemName);
  const numPatt = new RegExp(/^\d+$/);
  const jsonPatt = new RegExp(/[\[\{].*[\}\]]/);
  let result = null;
  if (item) {
    if (jsonPatt.test(item)) {
      result = JSON.parse(item);
    } else if (numPatt.test(item)) {
      result = parseFloat(item);
    } else {
      result = item;
    }
  }
  return result;
};

const set = (itemName, item) => {
  if (typeof item === 'object') {
    localStorage.setItem(itemName, JSON.stringify(item));
  } else {
    localStorage.setItem(itemName, item);
  }
};

const remove = itemName => {
  localStorage.removeItem(itemName);
};

export default { get, set, remove };
