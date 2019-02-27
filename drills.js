'use strict';
const MyArray = require('./array');
const arr = new MyArray();

// arr.push(3);
/** length :1
 * capacity: 3
 * memory address: 0
 
 */

// arr.push(5);
// arr.push(15);
// arr.push(19);
// arr.push(45);
// arr.push(10);

/** length :6
 * capacity: 12
 * memory address: 3
 after we pushed 15, the capacity of the array was full
 when we pushed 19, the arrray reallocated with three times 
 the new length(4) due to our defined ratio,
 and moved the address to free memory space at ptr 3
 */


// arr.pop();
// arr.pop();
// arr.pop();

/** length :3
 * capacity: 12
 * memory address: 3
 our pop method removed the laste three elements of the array (10, 45, then 19)
 the values stay in memory, but the the blocks are available to be re written over,
 ptr and capacity do not change.
 */


arr.push('tauhida');
console.log(arr.get(0));

/**
 * 
 result= NaN
 float 64 array only takes integers, not strings due to being a float
 */

/*
 _resize() allocates a new position in memory and redefines capacity via the ratio,
  ptr address is changed to new position in memory with larger capacity
 frees memory of the previous occupied space (old ptr)
*/


console.log(arr);

