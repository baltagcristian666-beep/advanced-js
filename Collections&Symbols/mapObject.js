//Map()

const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

/* Challenge */

/* 1. Create a map object "athletes" to store the athletes. */
const athletes = new Map()

function addAthlete(athlete, time) {
/* 2. This function should add athletes to the "athletes" map. */
    athletes.set(athlete, time)
    
}

function getSummary(){
/* This function should make the following appear in the console */
//     athletes.entries().forEach(([athleteObj, timeToday]) => {
//     console.log(`${athleteObj.name}'s average time is ${athleteObj.averageTime10KmMins} but today ${athleteObj.name} achieved ${timeToday}`);
//   });
    athletes.forEach((value, key)=>{
        console.log(`${key.name}'s average time is ${key.averageTime10KmMins} but today ${key.name} achieved ${value}`)
    })
//Alice's average time is 58.3 but today Alice achieved 57.3
//Dave's average time is 53.2 but today Dave achieved 61.1
//Micky's average time is 64.5 but today Micky achieved 59.9
//Judy's average time is 66 but today Judy achieved 61.6
}

addAthlete(athlete1, 57.3)
addAthlete(athlete2, 61.1)
addAthlete(athlete3, 59.9)
addAthlete(athlete4, 61.6)

getSummary()

//console.log(...athletes)

/*
Used when you want to insert in a specific order.
A key can be anything, not just strings or symbols.
You can choose the insertion order(normal objects don't keep the atributes
specified order).
!! Has a lot of methonds!
Returns an object.
*/