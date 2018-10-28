const assert = require('assert');
const sumOfOther = require('./src/sumOfOther.js');

describe('sumOfOther', () => {
  it('sumOfOther 1', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });
  
  it('sumOfOther 2', () => {
    const result = sumOfOther([3, 5, 6, 77, 6, 4, 5]);
    assert.deepEqual(result, [103, 101, 100, 29, 100, 102, 101]);
  });

  it('sumOfOther 3', () => {
    const result = sumOfOther([1]);
    assert.deepEqual(result, [0]);
  });

  it('sumOfOther 4', () => {
    const result = sumOfOther([]);
    assert.deepEqual(result, []);
  });

  it('sumOfOther 5', () => {
    const result = sumOfOther([]);
    assert.deepEqual(result, []);
  });

  it('sumOfOther 6', () => {
    const result = sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    assert.deepEqual(result, [119, 118, 117, 116, 115, 114, 113, 112, 111, 110, 109, 108, 107, 106, 105]);
  });

});