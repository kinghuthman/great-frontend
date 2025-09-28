/*

"Promise.all() is a method that takes an iterable of elements (usually Promises) as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

Source: Promise.all() - JavaScript | MDN

Promise.all() is frequently used when there are multiple concurrent API requests and we want to wait for all of them to have completed to continue with code execution, usually because we depend on data from both responses."

const [userData, postsData, tagsData] = await Promise.all([
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/tags'),
]);

EXAMPLE:

Resolved example.

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

REJECTED:

Rejection example.

const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}

*/

/**
 * SOLUTION
 *
 * Promises are meant to be chained, need to return a promise
 * If the input is empty, the returned promise resolves with an empty array
 * The returned promise contains an array of resolved values in the same order as the input if all of them are fulfilled
 * The returned promise rejects immediately if any of the input values are rejected or throw an error
 * The input array can contain non-promises
 */

/**
 * Using Async
 *
 * Since the function needs to return a promise we can construct a promise at the top level of the function and return it. The bulk of the code will be written within the constructor parameter.
 *
 * We first check if the input array is empty and resolve it with an empty array if so.
 */
