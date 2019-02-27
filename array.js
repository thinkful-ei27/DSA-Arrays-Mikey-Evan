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
    if (this.length === this.capacity) {
      this._resize(this.length + 1) * MyArray.SIZE_RATIO;
    }
    Memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = Memory.allocate(size);
    Memory.copy(this.ptr, oldPtr, this.length);
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

module.exports = MyArray;
