//Symbol

const hidden = Symbol("")

const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
}

book[hidden] = "Book is missing!"
console.log(book[hidden])

/*
Main use is to create unique keys(can add a key to an object if you don't
want to change it. The simbol will be there but will not be shown.)
A primitive data type, each Symbol is unique(even if looks the same).
Returns a symbol.
!!Every can have a description inside the ("description"). It's optional.
!!It's not shown when iterating the object. 
!!Must be added using [].
*/