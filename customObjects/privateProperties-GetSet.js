//private
/*
class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }
}

const safari = new Holiday('Kenya', 1000)
safari.#destination = 'Tanzania'
console.log(safari)
//SyntaxError: Private field '#destination' must be declared in an enclosing class
*/
/*
Are used to create a propertie or method which is private and can't be 
modified outside the class.
Has # before the name.
Can be used outide the class but the class name must be specified first.
Set and get must be used to modify it;s value.
*/


//Get and Set


class Holiday {
    #destination
    constructor(destination, price) {
        this.#destination = destination
        this.price = price
    }

    get destination() {
        return this.#destination
    }

    set destination(newDestination) {
        if (typeof newDestination !== 'string' || newDestination.length <= 0){
            throw new Error('Destination not valid')
        }
        this.#destination = newDestination
    }
}

const safari = new Holiday('Kenya', 1000)
//this way the value is set
safari.destination = "Tansania"
//this way the value is get
console.log(safari.destination)
//Tanzania

/*
Are used instead of a normal method when the methon doesn't receive arguments.
Must be kep simple:
1.
Get must only return the value of the propertie.
2.
Set must only validate the state of the propertie, check it's value. 
*/