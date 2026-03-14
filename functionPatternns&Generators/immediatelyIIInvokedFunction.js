//Selfcalling functions

//Ex.1
(async (country) => {
    const weather = await fetch('/geo.json')
    const weatherObj = await weather.json()
    console.log(`The weather in the ${country} today is ${weatherObj[country]}`)    
})('UK')

//EX.2
(async function(country) {
    const weather = await fetch('/geo.json')
    const weatherObj = await weather.json()
    console.log(`The weather in the ${country} today is ${weatherObj[country]}`)    
})('UK')

/*
Used to run a code once at the start of the sesion (maybe 
load something onn the page). 
The function usually is anonymous.
!!Doesn't polute the global namme space.
*/