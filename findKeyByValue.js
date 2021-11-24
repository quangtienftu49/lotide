// Assertion Function
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`)
  }
};

const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj);
  let keyFound;
  for (const key of keys) {
    if (obj[key] === value) {
      keyFound = key;
    }
  } 
  return keyFound;
}


// Test code:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);