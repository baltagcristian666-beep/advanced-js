//Throtteling

function handleResize(e){
    console.log('resize happened on event: ' + e)
}

function throttle(func, delay) {
    let throttleTimeout = null
    return (...args)=> {
       if(!throttleTimeout) {
           func(...args)
           throttleTimeout = setTimeout(()=> {
               throttleTimeout = null
           }, delay)
       } 
    }

}
const throttledHandleResize = throttle(handleResize, 1000)
window.addEventListener('resize', throttledHandleResize)
//resize happened on event: [object Event]

/*
Purpose: Used to unsure a function is called at most once in a period of time.
Mechanism: When an event triggers multiple times. Throtteling calls the function once 
at specific time intervals ignoring the aditional calls. 
!!Better used for sent operations.
*/



//Debouncing


/*
Purpose: Verifies that a function is called only after a certain period has passed since
the last triggering event.
Mechanism: When an event fires multiple times debouncing delays it's call until
a certain period has passed since its last call.
!!Better use for input messages.
*/


/*
!! The difference between the two is that throtteling timer start when the function 
is called and keeps ticking until it ends, then the function can run again. For
debouncing the timer resets every time the function is called and the function can
be executed again only when the the timer ends. 
*/