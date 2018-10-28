const assert = require('assert');
const make = require('./src/make.js');

describe('make', () => {
 
  function sum(a, b) {
    return a + b;
  }
  
  it('make 1', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(result, 777);
  });

  it('make 3', () => {
    const result = make(10)(100)(40, 50, 60)(sum);
    assert.deepEqual(result, 260);
  });

  it('make 4', () => {
    const result = make(1)(1)(1)(1)(1)(1)(1)(1)(1)(1)(sum);
    assert.deepEqual(result, 10);
  });

  it('make 5', () => {
    const result = make(1)(sum);
    assert.deepEqual(result, 1);
  });

  it('make 6', () => {
    const result = make(1)(2, 3, 4, 5, 6, 7, 8, 9)(sum);
    assert.deepEqual(result, 45);
  });
});