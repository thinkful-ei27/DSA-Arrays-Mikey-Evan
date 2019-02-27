const memory = require('./memory');
const Memory = new memory();

class MyArray {
  constructor() {
    this.length = 0;
    this.ptr = Memory.allocate(this.length);
    this.capacity = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('not enough length or its negative 🤷🏻‍');
    }

    return Memory.get(this.ptr + index);
  }
}

const array = new MyArray();

console.log(array);
