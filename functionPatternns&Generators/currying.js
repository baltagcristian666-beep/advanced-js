//Curring

//1.
const calculateVolume = length => width => height => length * width * height
//2.
// function calculateVolume(length) {
//     return function(width) {
//         return function(height) {
//             return length * width * height
//         }
//     }
// }


//Verbose way to call the functions:

// const withLength = calculateVolume(2)
// const withLengthAndWidth = withLength(3)
// const volume = withLengthAndWidth(4)

//More compact way:
const volume = calculateVolume(2)(3)(4)

console.log(volume)
//24

/*
Transforms a function with multiple parameters to nested functions
where each has only one parameter.
Used when you call a function multiple times with the same arguments. The functions
which orguments don;t change are called once and the ones which arguments
change is called multiple times. 
*/


//Example of how to partially set the variables:

const createLogger = level => message => `[${level.toUpperCase()}] ${message}`

const infoLogger = createLogger('info')
const warnLogger = createLogger('warn')
const errorLogger = createLogger('error')

// Log messages with "info" level
// console.log(logMessage("info", "Application started")) // Output: "[INFO] Application started"
// console.log(logMessage("info", "User logged in")) // Output: "[INFO] User logged in"
console.log(infoLogger("Application started"))
console.log(infoLogger("User logged in")) 

// // Log messages with "warn" level
// console.log(logMessage("warn", "Low disk space")) // Output: "[WARN] Low disk space"
// console.log(logMessage("warn", "High memory usage")) // Output: "[WARN] High memory usage"
console.log(warnLogger("Low disk space")) // Output: "[WARN] Low disk space"
console.log(warnLogger("High memory usage")) // Output: "[WARN] High memory usage"

// // Log messages with "error" level
// console.log(logMessage("error", "Unhandled exception")) // Output: "[ERROR] Unhandled exception"
// console.log(logMessage("error", "Failed to save file")) // Output: "[ERROR] Failed to save file"
console.log(errorLogger("Unhandled exception")) // Output: "[ERROR] Unhandled exception"
console.log(errorLogger("Failed to save file")) // Output: "[ERROR] Failed to save file"