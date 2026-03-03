/*
Window: fetch() method 

fetch(resource)
fetch(resource, options)

Used to get, update, delete, patch data. 
Resource: a string or a Request() object.
Options: is an object that contains method, body and headers.
*/
/*
fetch() method with .then()

fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => {
        console.log(err)
        // update the DOM to warn the user
        // access an alternative API
    })
    .finally(()=> console.log('The operation completed.'))  


!Is used when you need the returned value.

Returns: (p-promise)
returns a value: p gets fulfilled with the returned value as its value.
doesn't return anything: p gets fulfilled with undefined as its value.
throws an error: p gets rejected with the thrown error as its value.
*/
/*
fetch() method with async function

async function name(param0, param1, ...paramN) {
  statement
}
*/
/*
fetch() method with await

try {
    const response = await fetch('https://apis.scrimba.com/jsonplaceholder/post')
    if (!response.ok) {
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data)
} catch(err) {
    console.log(err)
}

!Is used when you need the returned value.
Is import to be used before an async action such as fetch. 
1. If it's not used a Promise which didn't receive the fetched data is returned.
2. If it's used a Promise containing the fetch data is returned.
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
/*
Promise() constructor


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "foo"
});

console.log(promise1);
// Expected output: [object Promise]

Is used to load resources that are not coming from a tipical API.
Returns:
1. A Promis returns object if it's not called asynchronous.
2. Resolve and Reject are functions that pass down a value to the 
first then we chain or, the try block using the async function. 
If not value is given returns undefined
The values are sent only when the Promise is consumed.
The promise is consumed when is called.
*/

/*
Regula de aur

1. Ai nevoie de rezultat acum? → await (sau .then)

2. Poți continua fără rezultat și îl folosești mai târziu? → păstrezi
promise-ul și aștepți mai târziu (await mai târziu / Promise.all)

3. Vrei doar să reacționezi la un eveniment? → event listener, 
nu await (decât dacă îl împachetezi într-un Promise intenționat)
*/
/*
Promise.all()

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

!Used to check if multiple promises are fulfilled.
Accepts an array of Promisses and returns a single Promise.
If all Promises fulfill returns an array with the resolved values.
If one of the Promises rejects. Returns that rejection value.
*/