// Assertion Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`)
  }
};

const eqArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  } else {
    const arr12 = arr1.concat().sort();
    const arr22 = arr2.concat().sort();
    for (let i = 0; i < arr12.length; i++){
      if (arr12[i] !== arr22[i]) {
        return false;
      }
    }  
  }
  return true; 
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
    for (const key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }

      } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}.`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`)
  }

  const inspect = require('util').inspect;

  console.log(`This is new testing: ${inspect(actual)}`);
};