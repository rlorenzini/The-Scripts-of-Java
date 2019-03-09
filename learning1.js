alert('hello world')

console.log("Console.log is the same as print in Python.")
console.log("This does not display anything for the user. Console.log is only for the console on the webpage.")

let name = "John"
var firstName = "Robert"
// let and var are different, with let being more modern and primarily used over var
// JS was recently improved with ES6, which allows many features such as let work on mobile
console.log(name, firstName)
let numbers = [1,2,3,4,5,6] //just an array of numbers
numbers.push(99) //adds item to array

// numbers[2] call item
for(let index = 0; index < numbers.length; index++) {
  //indentation is rarely an issue, unlike in python
  console.log(numbers[index])
}

let age = 21
if(age>=21) {
  console.log('age is >= 21')
} else if(age<21) {
  console.log('age is < 21')
} else {
  console.log('unknown age...')
}

function greet() {
  console.log("This is the greet function.")
}
greet()
// python would crash if you called greet() before defining it
//  JS will NOT crash; it will run normally as if greet() did not exist

function add(a,b) {
  console.log(a+b)
}
add(3,5)
function subtract(a,b) {
  return a-b
}
let result = subtract(8,4)
console.log(result)
// empty object
let car = {}
car.make = "Honda"
car.model = "Accord"
car.year = 1992
// same thing as above but using Object class
let anotherCar = new Object()
console.log(car)
// very slow way of creating Objects and Classes

//CLASSES in JS
function Car() { // can pass in make, model, and year, just like in python (without using SELF)
  //this is one way of creating a CLASS
  this.make = "" //=make if passing make into the function
  this.model = ""
  this.year = ""
}

// create functions for Objects
Car.prototype.message = function() {
  console.log("This is an anonymous function with no name.")
  console.log("Anonymous functions attached to objects are very common. Get used to them.")
  console.log("Anonymous functions prevent other people from randomly calling them.")
}
//this will be how you create class objects in most cases
//ask yourself: is this function going to get called when you want it to, or will it be called in other places?


function startCar() {
  console.log("Starting the car")
}
function accelerateCar() {
  console.log("Vroom vroom")
}
function changeGear(gearNo) {
  console.log("Changing gear to " + gearNo)
}
// prototype is a way to attach different properties to a class, such as a function
Car.prototype.start = startCar
Car.prototype.accelerate = accelerateCar
Car.prototype.changeGear = changeGear
let car1 = new Car()
console.log(car1)
car1.make = "Tesla"
car1.model = "Model 3"
car1.year = 2018
console.log(car1)

//calling the attached start function, which was associated with the startCar() function
car1.start()
car1.accelerate()
car1.changeGear(1)

car1.message()


let nameFirst = "Robert"
let nameLast //exists but undefined
let nameMiddle = null //null == no value; variable exists with no value
// if nameMiddle != null {
//
// }
// if nameLast == undefined {
// }
// nameMiddle.something() will not work since nameMiddle = null
