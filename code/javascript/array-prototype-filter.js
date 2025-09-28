/*Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.

For sparse arrays (e.g. [1, 2, , 4]), the empty values should be ignored while traversing the array (i.e. they should not be in the resulting array).

Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.

EXAMPLE

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]

NOTES

The filter callback function takes in more than just the element! There's also a second parameter for Array.prototype.filter as well. You are recommended to read the specification for Array.prototype.filter on MDN Docs before attempting.
*/

/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */

Array.prototype.myFilter = function (callbackFn, thisArg) {
  // define len as length of 'this' and results is the new array to return
  const len = this.length;
  const results = [];

  // loop through length of this
  for (let k = 0; k < len; k++) {
    // get value of this using bracket notation and current iteration of loop
    // value at index k
    const kValue = this[k];

    //
    if (
      // checks if index k exists directly on the array this
      // ensure its not a whole in a sparse array
      // const arr = ['22', ,'223']
      // Object.hasOwn(arr, 1) is (returns false)
      Object.hasOwn(this, k) &&
      // invokes the callback with the arguments
      // thisArg as its this context
      // this is the original array
      // kValue the element
      // k is the index
      // if it returns true we want to keep the element
      callbackFn.call(thisArg, kValue, k, this)
    ) {
      results.push(kValue);
    }
  }
  return results;
};
