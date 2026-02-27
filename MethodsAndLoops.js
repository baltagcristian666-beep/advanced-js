/*
for...break...continue

Inside for break can be used to stop the execution, continue to continue.
*/
/*
for...of

Syntax
for (variable of iterable)
  statement

Made for arrays to loop through their's values. 
*/
/*
for...in

for (variable in object)
  statement

Made for objects to loop through their's keys.
*/
/*
Array.prototype.forEach()

forEach(callbackFn)
forEach(callbackFn, thisArg)

Made for arrays to apply a function to each of their values. Its return value is discarded.
*/
/*
Array.prototype.map()

map(callbackFn)
map(callbackFn, thisArg)

Made for arrays to apply a function to each of their values. It creates a new array. 
The return value for all elements can be adjusted inside the function. 
 */
/*
Array.prototype.reduce()


reduce(callbackFn)
reduce(callbackFn, initialValue)

Made for arrays to apply a function to each of their values.
Returns a single value by default.
*/
/*
Array.prototype.includes()

includes(searchElement)
includes(searchElement, fromIndex)

Made for arrays to check if they contain a certain value. Returns true of false by default. 
*/
/*
Array.prototype.join()

join()
join(separator)

Made for arrays to concatenate all values and separate them using the input.
Return a string by default. 
*/
/*
Array.prototype.filter()

filter(callbackFn)
filter(callbackFn, thisArg)

Made for arrays to apply a filter to all values. The input is the filter.
Returns a shallow copy of the array with the values that pass the test by default. 
*/
/*
String.prototype.replace()

replace(pattern, replacement)

Made for strings to replace one element with a new value given by an input.
The structure that will be replaced is also an input and can be string or RegExp.
Returns a new string by default.
*/
/*
String.prototype.replaceAll()

replace(pattern, replacement)

Made for strings to replace multiple elements with a new value given by an input.
The structure that will be replaced is also an input and can be string or RegExp.
Returns a new string by default.
*/
/*
RegExp

const re = /pattern/flag

Is used to match the text with a pattern. Can't be used as a string.
*/
/*
RegExp() constructor

const re = new RegExp(pattern)
const re = new RegExp(pattern, flags)

Can create a regex string and use it.
*/
/*
.every() / .some() / .find() / .findIndex() / .indexOf() / .at()

.every() 
Checks if every value satisfies the condition. Return true or false as default.

.some()
Checks if at least one value satisfies the condition. Return true or false as default.

.find() 
Returns the first value that satisfies the condition. If it find no value return undefined.

.findIndex()
Returns the index of the first elements that satisfies the condition. Otherwise returns -1.

.indexOf()
The input is a value not a condition. Returns the index of the first elements. 
Otherwise returns -1.

.at()

at(index)

The input is a pos or net integer. Returns the value at that index. 
*/
