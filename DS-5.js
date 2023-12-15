
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000

let fn = [x => 10 * x, x => 10 * x, x => 10 * x];

console.log(fn[0](fn[1](fn[2](1))))