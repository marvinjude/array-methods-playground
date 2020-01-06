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