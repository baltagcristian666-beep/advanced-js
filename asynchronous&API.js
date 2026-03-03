/*
Window: fetch() method 

fetch(resource)
fetch(resource, options)

Used to get, update, delete, patch data. 
Resource: a string or a Request() object.
Options: is an object that contains method, body and headers.
*/
/*
.then()

then(onFulfilled)
then(onFulfilled, onRejected)

Then is a async chain method.
*/
/*
fetch() method with async function

async function name(param0, param1, ...paramN) {
  statement
}
*/
/*
await

await expression

Is import to be used before an async action such as fetch. 
1. If it's not used returns a Promise which didn't receive the fetched data.
2. If it's used returns a Promise containing the fetch data.
Can only be used inside an async function or as it is,
only if the script is a module.
!
*/
/*
try...catch

try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}

Used to catch an error. The try block uses "throw new Error("")"
to stop execution and run the catch block. 
There are 2 common errors:
1.If the base URL is invalid instead of a promise returns an error
usually TypeError. 
2.If the endpoit of the URL is invalid returns a promise which contains
an object with the keys: status, message and code. 
*/


