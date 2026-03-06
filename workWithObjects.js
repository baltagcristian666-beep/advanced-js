/*
[] and . after object

const user1 = {
  username: "rpchan",
  subscriptionLevel: "bronze",
  accessPremiumFeature: false
}

function canAccessPremiumFeature(userObj, prop) {
console.log(userObj[prop])
// false
console.log(userObj.prop)
//undefined
}

console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))

[] is used when the key is a variable which can change.
. us used when the key is the one inside the object. 
*/

/*
Object.keys()

const object = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.keys(object));
// Expected output: Array ["a", "b", "c"]

Used to get the keys of an object.
Returns an array with the object's keys.
*/

/*
Object.values()

const object = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.values(object));
// Expected output: Array ["some string", 42, false]

Used to get the values of an object.
Returns an array with the object's values.
*/
/*
Object.entries()

const books = {
  "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
  "b002": { title: "1984", price: 15.99, isAvailable: false }
}

const bookEntries = Object.entries(books)
console.log(bookEntries)
// [['b001', {title: 'To Kill a Mockingbird', price: 18.99, isAvailable: true}], 
// ['b002', {title: '1984', price: 15.99, isAvailable: false}]]

Used to transform the object in an array and the key: value group
in arrays inside the main array.
Returns an array which contains arrays.
!If the small arrayes contain nested objects those are not converted.
*/

/*
Object.hasOwn() replacement for Object.prototype.hasOwnProperty()

const object = {
  prop: "exists",
};

console.log(Object.hasOwn(object, "prop"));
// Expected output: true

Used to check if the object has that key.
Returns true if the key exists, otherwise false.
*/

/*
Spread syntax (...) vs Rest parameters (...)

Spread syntax (...)

String:
const str = "abcd"
console.log(...str)
//a b c d

Arrays:
const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
console.log(...lunchMenu)
//Greek Salad Open Sandwich Parsnip Soup Flatbread and Dip
console.log([...lunchMenu])
//['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']

Objects:
const salad1 = {
    name: 'green',
    ingredients: ['lettuce', 'tomato'] 
}
console.log(...salad1)
//Spread syntax requires ...iterable[Symbol.iterator] to be a function
console.log({...salad1})
//{name: 'green', ingredients: ['lettuce', 'tomato']}

!!Concatenate:
const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]
//['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']

Is used to unpack an array or string into aruments.
An object isn't iteratable and must be place inside {}.
*/

/*
Rest parameters (...)

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}
console.log(sum(1, 2, 3));
// Expected output: 6

Allows a function to accepts multiple arguments as an ARRAY. 
*/

///SHALLOW COPY AND DEEP COPY
/*
For SHALLOW COPYs, the objects and arrays are DEEP COPIES at level one,
which are usually primitives, and REFFERENCES for nested object or arrays.
For DEEP COPYs, the entire object or array and DEEP COPIES, including
the nested arrays or objects.
*/

//SHALLOW COPY
/*
Object.assign()

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

Copies the properties of a source object to a target object.
Returns a new object.
*/


//DEEP COPY
/*
structuredClone()

const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena'
} 

const deepClonedStudentDetails = structuredClone(studentDetails)

Creates a deep copy of the object. 
*/

/*
this

const product = {
    name: 'Vanilla Lip Gloss',
    getProductInfo: function() {
        console.log(this)
    }
        getProductData: ()=> {
        console.log(this)
    }
}

product.getProductInfo()
//{name: 'Vanilla Lip Gloss', getProductInfo: ƒ()}
const productDetails = product.getProductInfo
productDetails()
//undefined
product.getProductData()
//Window

Is used to refer to the properties of the object. 
When the function is call, not execute, this takes the value of the
environment where the function is called.
1.
product.getProductInfo() - executes the function inside the object, 
this works fine
2.
const productDetails = product.getProductInfo - the void function 
is called. And it will look like this.
productDetails = function() {
        console.log(this)
    }
3.
For arrow functions this takes the value of the outer scope, which
is outside the object, and that could be Window.
*/

/*
Function.prototype.bind()

const module = {
  x: 42,
  getX() {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

Is used to keep the properties that this refers. 
*/