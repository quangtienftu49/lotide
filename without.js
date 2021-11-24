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

const without = (source, itemsToRemove) => {
  let newArr;
  for ( let i = 0; i < itemsToRemove.length; i++) {
    newArr = source.filter(item => item !== itemsToRemove[i])
  }
  return newArr;
}

assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true); // => should PASS
assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true); // => should PASS
assertArraysEqual(eqArrays(without(["1", 3, "3"], [1, 2, "3"]), ["1", "2"]), false); // => should FAIL