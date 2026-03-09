/*
Used to create and return multiple object.
Classes are shared by default.
Uses extends / super for inheritance.
Must create a new instance, othewise this
might point to the wrong context.
*/





// function gamer(name, score) {
//     return {
//         name,
//         score,
//         incrementScore() {
//             this.score++
//         }
//     }
// }

function Gamer(name, score) {
    this.name = name
    this.score = score
    this.incrementScore = function() {
        this.score++
    }
}

const dave = new Gamer('Dave', 0)
console.log(dave)
//Gamer {name: 'Dave', score: 0}