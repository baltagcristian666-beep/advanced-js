





// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
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