// function Car(make,model) { //dont need variables unless you want class to require them
//   this.make = make
//   this.model = model
//   this.price = 0.0 //didnt pass price through Car() since we dont want to require a price
// }
//
// Car.prototype.start = function() {
//   console.log("Starting car...")
// }
//
// let car = new Car('Honda','Corolla')
// car.make = 'Toyota'
// car.model = 'Corolla'
// car.price = 13,000.00
//
// car.start()


class Car {
  //empty constructor
  //constructor() {

  //}
  constructor(make,model) { //similar to init from PYTHON
    this.make = make
    this.model = model
    this.speed = 0.0
  }
  start() {
    console.log('Starting the car...')
  }
  accelerate() {
    this.speed = 70
  }
}
//creating car using empty constructor
//let car = new Car()


let car = new Car('Honda','Accord')
car.start()
car.accelerate()
console.log(car)



//ARRAY HELPERS in ES6
//foreach, map, filter, find, some, every, and reduce are other array helpers


//forEach = for(let i=0;i<array.length;i++)
let numbers = [1,2,3,4,5,6]
numbers.forEach(index => console.log(index))

//map returns a new array without modifying old array
//map = let newArray = []
//for(let i=0, i<array.length, i++)
//newArray.push(array[i].value)
let doubled = numbers.map(function(num) {
  return num*2
})
console.log(doubled)
//filter works like map but returns true/false results
let evens = numbers.filter(function(even) {
  return even %2==0;
})
console.log(evens)
//can also filter out keys or values
//if key === "THIS" then......

//find lets you pull all values from an array which are associated with what youre searching

// let users = [{name:"John", age:36, address: "Peach Street"}]
// let search = "John"
// let foundUser = users.find(function(user) {
//   return user.name == search $$ user.age == 36
// })
// users.find(obj => obj.name == search)
// console.log()

//reduce can do most anything involving an array, but ONLY with an array
//most commonly used to reduce a value to one number (total price of a shopping cart)

//array.reduce((startposition, index) => startposition + index, startvalue)


sum = 0
let newnumbers = numbers.reduce((sum, no) => sum + no, 0)
console.log(newnumbers) // = 21
//CONSTANT
//const assigns a permanent value, which cannot be changed ever
