// Assertion Function
const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`)
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true; 
}


const letterPositions = function(sentence) {
  const results = {};
  const noSpaces = sentence.split(' ').join('');
  
  for (let i = 0; i < noSpaces.length; i++) {
    if (!results[noSpaces[i]]) {
      results[noSpaces[i]] = [i];
    } else {
      results[noSpaces[i]].push(i);
    }
    // results[noSpaces[i]] = results[noSpaces[i]] ? results[noSpaces[i]].push(i) : [i];
  }

  return results;
};

console.log(letterPositions("hello").l)
// Test code:
assertArraysEqual(eqArrays(letterPositions("hello").e, [1]), true);
assertArraysEqual(eqArrays(letterPositions("hello").o, [4]), true);
assertArraysEqual(eqArrays(letterPositions("hello").l, [2, 3]), true);
