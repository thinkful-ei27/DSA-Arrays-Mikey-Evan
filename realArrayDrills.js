'use strict';

const replaceSpace = str => {
  //loops over str
  //checks each val to makes sure if there is an empty space
  //if there is an empty space replace w/ %20
  let regex = / /gi;
  return str.replace(regex, '%20');
};

console.log(replaceSpace('www.thinkful.com /tauh ida parv een'));


// Filter an array


//  array of numbers,
//  remove all numbers that are less than 5


const removeFourAndBelow = (arr) => {

  // loop over array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

const arr = [6,6,6,3,7,7,7,2];

console.log(removeFourAndBelow(arr));