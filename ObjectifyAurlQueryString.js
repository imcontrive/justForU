function convertQueryToMap(query) {

  if (query == null || typeof query === 'undefined' || query === '') {
    return {};
  }

  // split by &
  // for each key-value pair, split by = to get key and value respectively
  // split key by . to get parts.
  // for each part except the last part, create empty object if not exists
  // insert last part into last object and set value to last part
  let result = query.split('&').reduce( (acc, pair) => {

    let [key, value] = pair.split('=');
    let parts = key.split('.');
    let lastPart = parts.splice(parts.length - 1, 1)[0];
    let leftObj = parts.reduce((objMap, part) => {
        if (!objMap[part]) { objMap[part] = {}; }
        return objMap[part];
    }, acc);
    leftObj[lastPart] = decodeURIComponent(value);
    return acc;
  }, {});
  return result;
}
