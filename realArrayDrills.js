'use strict';

const replaceSpace = str => {
  //loops over str
  //checks each val to makes sure if there is an empty space
  //if there is an empty space replace w/ %20
  let regex = / /gi;
  return str.replace(regex, '%20');
};

// console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));

// // Filter an array

// //  array of numbers,
// //  remove all numbers that are less than 5

// const removeFourAndBelow = (arr) => {

//   // loop over array
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 5) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

const arr = [6, 6, 6, 3, 7, 7, 7, 2];

// console.log(removeFourAndBelow(arr));

const maxSum = arr => {
  let max = 0;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    currentSum = Math.max(currentSum + current, 0);
    max = Math.max(currentSum, max);
  }
  return max;
};

// console.log(maxSum([-4, -6, -3, -5, -2, 1]));


//  merge arrays

const mergeArrays = (arr1, arr2) => {
  // array .concat

  const newArray = arr1.concat(arr2);
  const otherNewArray = [...arr1, ...arr2];

  return otherNewArray.sort((a, b) => a - b);

  //array sort a-b
  //return
};

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];

// console.log(mergeArrays(arr1, arr2));