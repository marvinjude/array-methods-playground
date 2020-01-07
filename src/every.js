/**
 * Determines whether all the members of an array satisfy the specified test.
 * @param {function} callback - A function that accepts up to three arguments. The every method calls the callbackfn function for each element in the array until the callbackfn returns a value which is coercible to the Boolean value false, or until the end of the array.
 * @param {Object} thisArg -  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
Array.prototype._every = function(callbackFn, thisArg) {
  if (typeof callbackFn != "function")
    throw new Error(`TypeError: ${callbackFn} is not a function`);

  for (let index = 0; index < this.length; index++) {
    if (!callbackFn.call(thisArg, this[index], index, this)) {
      return false;
    }
  }
  return true;
};