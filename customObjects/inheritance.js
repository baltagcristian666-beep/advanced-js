//Inheritance


/*
Objects and factory functions can't inherite.
Means that an object ingerit the properties and methonds from other object.
*/

//polymorphism


/*
An object can override a methond that it inherits adapting it to the specific need.
*/

//Prototype(chain inheritance)

/*
An objcet cann inherit a methond or other object using prototype. 
*/

//super

/*
Similar to call()
1.
Used to access properties(any value or methods) of a parent class(superclass).
2.
Used to invoke(import the properties) the superclass's constructor
*/


/*
extend

Used to create a class that is a child of another class.
*/

//Inheritance for constructor functions

function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function () {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
console.log(concert.getDetails())

/*
It works like this:
The properties of the parent function must be inherite inside the child 
function using call. Now child function has inherit the parent parameters.
*/

//polymorphism for constructor functions using prototype

function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

Event.prototype.getDetails = function() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
    
}

//event becomes the prototype of concert but concert is overwrited
Concert.prototype = Object.create(Event.prototype) 
//here concert is reasinged after if has been overwrited.
Concert.prototype.constructor = Concert

//here polymorphism takes place
Concert.prototype.getDetails = function() {
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}

const concert1 = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
console.log(concert1)
//Concert {name: 'Summer Beats', location: 'City Stadium', date: '2024-07-15', 
// headliner: 'The Electrons'}
console.log(concert.getDetails())
//Event: Summer Beats, Location: City Stadium, Date: 2024-07-15, Headliner: The Electrons


/*
The method connected to Event object is only created once inside that 
object. Any other object can use it without instantiating it.
polymorphism is applied to the getDetails() method iis order to adjust the
method the the Concert needs.
*/

////polymorphism for class costructors using super and extends