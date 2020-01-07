/**
 * Determines whether the specified callback function returns true for any element of an array.
 * @param {function} callback -  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value true, or until the end of the array
 * @param {Object} thisArg -  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
Array.prototype._some = function(callbackFn, thisArg) {
  if (typeof callbackFn != "function")
    throw new Error(`TypeError: ${callbackFn} is not a function`);

  for (let index = 0; index < this.length; index++) {
    if (callbackFn.call(thisArg, this[index], index, this)) {
      return true;
    }
  }
  return false;
};
