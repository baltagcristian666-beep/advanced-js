//Recursion

let str = 'SCRIMBA'
//console.log(str.slice(1))
function reverseStr(str) {
/*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!
*/
if(str.length <= 0){
    return ""
}
console.log(str)
return reverseStr(str.slice(1)) + str[0]

}

console.log(reverseStr(str))

// str.slice(start, end)

// The calls list has this
// SCRIMBA
// CRIMBA
// RIMBA
// IMBA
// MBA
// BA
// A
// ABMIRCS
/*
Concret, la întoarcere:
reverseStr("") returnează ""
reverseStr("A") returnează "" + "A" → "A"
reverseStr("BA") returnează "A" + "B" → "AB"
reverseStr("MBA") returnează "AB" + "M" → "ABM"
reverseStr("IMBA") → "ABM" + "I" → "ABMI"
reverseStr("RIMBA") → "ABMI" + "R" → "ABMIR"
reverseStr("CRIMBA") → "ABMIR" + "C" → "ABMIRC"
reverseStr("SCRIMBA") → "ABMIRC" + "S" → "ABMIRCS"
*/

return reverseStr(str.slice(1)) + str[0]

// ›
// SCRIMBA
// ›
// CRIMBA
// ›
// RIMBA
// ›
// IMBA
// ›
// MBA
// ›
// BA
// ›
// A
// ›
// SCRIMBA

/*
Call a function from inside.
How it works:
The function is called multiple times and the calls are saved inside
a call list. After that the functions are executed from the last to the first.

function reverseStr("") {
return reverseStr("") + str[0]<-("")
}
function reverseStr(A) {
return reverseStr("") + str[0]<-(A)
}
function reverseStr(BA) {
return reverseStr(A) + str[0]<-(B)
}
function reverseStr(MBA) {
return reverseStr(BA) + str[0]<-(M)
}
And so on..
*/