'use strict';

const memory = require('./memory');
const Memory = new memory();

class MyArray {
  constructor() {
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
    this.capacity = 0;
  }
  push(value) {
    Memory.set(this.ptr + this.length, value);
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size * MyArray.SIZE_RATIO);
    Memory.copy(this.ptr, oldPtr, )
    Memory.free(oldPtr);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('not enough length or its negative 🤷🏻‍');
    }
    return Memory.get(this.ptr + index);
  }
}

MyArray.SIZE_RATIO = 3;

const array = new MyArray();

array.push(5);
const five = array.get(0);

console.log(array);

