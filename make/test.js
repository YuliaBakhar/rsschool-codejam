const assert = require('assert');
const make = require('./src/make.js');

describe('make', () => {
  it('make 1', () => {
    const result = make([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
  
  it('make 2', () => {
    const result = make([3, 5, 6, 77, 6, 4, 5]);
    assert.deepEqual(result, [103, 101, 100, 29, 100, 102, 101]);
  });

  it('make 3', () => {
    const result = make([1]);
    assert.deepEqual(result, [0]);
  });

  it('make 4', () => {
    const result = make([]);
    assert.deepEqual(result, []);
  });

  it('make 5', () => {
    const result = make([]);
    assert.deepEqual(result, []);
  });

  it('make 6', () => {
    const result = make([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    assert.deepEqual(result, [119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105]);
  });

});