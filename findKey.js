const findKey = function(obj, callback) {
  const keys = Object.keys(obj);
  let keyFound;
  for (const key of keys) {
    if (callback(obj[key])) {
      keyFound = key;
      break;
    };
  };
  return keyFound;
}


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

