//call()

//1.
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

console.log(new Food("cheese", 5).name);
// Expected output: "cheese"

//2.
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours

/*
Used to connect this from the function with this from the constructor.
Can be used inside the function to pass the constructor arguments 1,
or at the end of the function call to specify the constructor 2.
*/

//apply()

function displayPolitician(currentSituation) {
    // console.log(this)
    console.log(`${this.name} is ${this.age} years old. Current situation: ${currentSituation}.`)
}

const politician1 = {
  name: 'Carly Fowler',
  age: 40
}

displayPolitician.apply(politician1, ['In jail for corruption'])

/*
Used insted of call() when the sescond argument is an array.
*/