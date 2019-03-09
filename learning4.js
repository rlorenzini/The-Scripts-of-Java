// VALIDATIONS (most commonly username and password creation requirements)

let btnRegister = document.getElementById("btnRegister")
let registerForm = document.getElementById("registerForm")

btnRegister.addEventListener("click", function(event) {
  let isFormValid = registerForm.checkValidity()
  event.preventDefault(); //prevents FORM from submitting
  console.log(event)
  console.log(isFormValid)
})



// CALLBACKS
function greet() {
  console.log("Hello!")
}
//setTimeout is called only once
window.setTimeout(greet,5000)
// window.setTimeout(function() {
//console.log("Hello!")
//}, 5000)

//setInterval fires continuously
window.setInterval(function() {
  console.log("Another fairy died..")
}, 5000)

let count = 1

let intervalId = window.setInterval(function() {
console.log("More intervals")
if(count == 5) { //stop interval after five iterations
  window.clearInterval(intervalId)
} count++
},5000)

// function add(a,b) {
//   return a+b
// }
//
// let result = add(2,5)
//passing a function through a function (CALLBACK)


function greet(callback) {
  callback()
  // console.log(callback)
}

greet(function() {
 console.log("you found me!")
})
