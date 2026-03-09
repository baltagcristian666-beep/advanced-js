
/*
Doesn't have inheritance
*/



// const gamer = {
//     name: 'Dave',
//     score: 0,
//     incrementScore: function(){
//         this.score++   
//     }
// } 

function gamer(name, score) {
    return {
        name,
        score,
        incrementScore() {
            this.score++
        }
    }
}

const alice = gamer('Alice', 10)
console.log(alice)
//{name: 'Alice', score: 10, incrementScore: ƒ()}