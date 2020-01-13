/**
 * Returns the value of the first element in the array where predicate is true, and undefined otherwise.
 * @param {function} callbackFn - find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
 * @param {Object} thisArg -  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
Array.prototype._find = function(callbackFn, thisArg) {
  if (typeof callbackFn !== "function")
    throw new Error(`TypeError: ${callbackFn} is not a function`);

  if (this.length == 0) return void 0;

  for (let index = 0; index < this.length; index++) {
    if (callbackFn.call(thisArg, this[index], index, this)) {
      return this[index];
    }
  }

  return void 0;
};
