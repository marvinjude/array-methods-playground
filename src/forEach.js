/**
 * Performs the specified action for each element in an array.
 * @param {function} callbackFn - A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array..
 * @param {Object} thisArg -  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
Array.prototype._forEach = function(callbackFn, thisArg) {
  if (typeof callbackFn != "function")
    throw new Error(`TypeError: ${callbackFn} is not a function`);

  for (let index = 0; index < this.length; index++) {
    callbackFn.call(thisArg, this[index], index, this);
  }
};
