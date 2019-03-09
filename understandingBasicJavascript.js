// define a function that prints hello (to be used as a callback function)
function printHello() {
    console.log("Hello")
}
// define a function that prints hola (to be used as a callback function)
function printHi() {
    console.log("Hi")
}
// define the calling function
// function prints a message before executing the callback function
function callFunction(f){
    console.log("Inside the calling function")
    f()
}
// // execute the calling function using the two named callback functions
callFunction(printHello)
callFunction(printHi)
// // execute the calling function  using an anonymous function
callFunction(function(){
    console.log("Bye")
})
// define
function userHello(n){
    console.log(`Hello ${n}`)
}
// define the calling function
// execute the callback function with the hardcoded name
function callFunctionWithName(f){
    f("Benjamin")
}

// define th calling function using userHello and an anonymous function
callFunctionWithName(userHello)
callFunctionWithName(function(n){
    console.log(`Bye ${n}`)
})

execute the printHello function after three seconds
window.setTimeout(printHello, 3000)

// execute the anonymous function after three seconds
window.setTimeout(function(){
    console.log("Bye")
}, 3000)

// create an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//define a function that returns the sum of the input and 2
function add2(num){
    return num + 2
}
// call the map function wit hadd2 as the callback
let numberPlus2 = numbers.map(add2)
// all the map function with an anonymous function as a callback
let numbersTimes2 = numbers.map(function(num){
    return num * 2
})
// print the new arrays

console.log(numberPlus2)
console.log(numbersTimes2)
