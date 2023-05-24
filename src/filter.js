/**
 *
 * @param {funtion} callbackFn
 * @param {Object} thisArg
 */
Array.prototype._filter = function (callbackFn, thisArg) {
  if (typeof callbackFn != 'function') {
    throw new Error(`TypeError: ${callbackFn} is not a function`);
  }

  let filteredArray = [];
  for (let index = 0; index < this.length; index++) {
    if (callbackFn.call(thisArg, this[index])) {
      filteredArray.push(this[index]);
    }
  }
  return filteredArray;
};
