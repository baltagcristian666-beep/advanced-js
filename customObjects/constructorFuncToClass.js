/*
Used to create and return multiple object.
Has inheritance.
Must create a new instance, othewise this
might point to the wrong context.
Classes are better.
*/



// function Gamer(name, score) {
//     this.name = name
//     this.score = score
//     this.incrementScore = function() {
//         this.score++
//     }
// }


class Gamer {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    
    incrementScore() {
        this.score++  
    }
}

const dave = new Gamer('Dave', 0)
dave.incrementScore()
console.log(dave)


