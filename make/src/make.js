module.exports = make = (n) => {
  let fn = function (x) {
    let res = 0;
    if (typeof x !== 'function') {
      res = Array.from(arguments).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    return make(res + n);
  }
  fn.valueOf = () => n;
  return fn;
}
