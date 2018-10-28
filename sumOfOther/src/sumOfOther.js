module.exports = function sumOfOther(array) {
  let summ = 0, result = [];  
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if (j!==i) {
          summ += array[j];
      }
    }
    result.push(summ);
    summ = 0;
  }
  return result;
}