export const getKeyByValue = (object, value) => {
  for (let key in object) {
    if (object.hasOwnProperty(key) && object[key] === value) {
      return key;
    }
  }
  return null;
}
