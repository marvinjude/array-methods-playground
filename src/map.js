//_<METHOD_NAME>

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param {function} callback - callback will be called with current element, index and the array in concern on every iteration
 * @param {Object} thisArg -  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
Array.prototype._map = function(callbackFn, thisArg = this) {
  if (typeof callbackFn != "function")
    throw new Error(`TypeError: ${callbackFn} is not a function`);

  let newArray = [];
  for (let index = 0; index < thisArg.length; index++) {
    const newElement = callbackFn(thisArg[index], index, thisArg);
    newArray = [...newArray, newElement];
  }
  return newArray;
};

