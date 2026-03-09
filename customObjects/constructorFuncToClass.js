



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


