/*
Logical OR (||)

Works with boolean and not booleann operands and an 
infitine number of operands.
For boolean operands if one of them is true returns true.
For not boolean operands if one of them is falsy returns the
truthy value. 
*/
/*
Logical OR (&&)

Works with boolean and not booleann operands and an 
infitine number of operands.
For boolean operands if all of them is true returns true otherwise false.
For not boolean operands, the operator returns the value of the first 
falsy operand encountered when evaluating from left to right, or the value 
of the last operand if they are all truthy.
*/
/*
Nullish coalescing operator (??)

The nullish coalescing (??) operator is a logical operator that returns 
its right side operand when its left side operand is null or 
undefined, otherwise returns its left side operand.
*/
/*
Optional chaining (?.)

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

The optional chaining (?.) operator accesses an object's property or 
calls a function. If the object accessed or function called using this 
operator is undefined or null, the expression short circuits and evaluates 
to undefined instead of throwing an error.
*/