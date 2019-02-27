'use strict';



// const findMaxSum = (arr) => {
//   let maxSum;
//   let counter = 0;

//   if(counter === arr.length){
//     return maxSum;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if i
//   }
// };



const createProducts = (arr) => {
  // loop over the array
  let newArray;
  for (let i = 0; i < arr.length; i++) {
    //  ignore value at current index
    let filteredArray = arr.filter(num => num !== arr[i]);
    //  value at index becomes product of all other elements of array
    newArray = filteredArray.reduce((acc, number) => {
      const product = 1;
      let ans = product * number;
      console.log(ans);
      acc = ans;
      return acc;
    }, []);
  }
  return newArray;
};

console.log(createProducts([1, 3, 9, 4]));