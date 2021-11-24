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

const flatten = (nestedArr) => {
  let newArr = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (Array.isArray(nestedArr[i])) {
      for (let j = 0; j < nestedArr[i].length; j++) {
        newArr.push(nestedArr[i][j])
      }
    } else {
      newArr.push(nestedArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))