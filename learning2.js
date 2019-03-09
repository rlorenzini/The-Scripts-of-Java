console.log(this) //this refers to whole page
// this is used for debugging and testing; put it in the heirarchy you're working with

let nameTextBox = document.getElementById('nameTextBox')
console.log(nameTextBox.value) //already knows where nameTextBox is and goes straight to it
console.log(document.getElementById('nameTextBox').value) //searches entire webpage for nameTextBox
// document.getElementById() takes a lot of resources and will cause performance drops
// when used on larger websites
let body = document.body
let bannerDiv = document.getElementById('bannerDiv')
let btnClick = document.getElementById('button')
let currentTime = document.getElementById('currentTime')

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Noon';
  }
  else
  {
  hour=12;
  prepand=' PM';
  }
  }
  if (hour===0 && prepand===' AM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Midnight';
  }
  else
  {
  hour=12;
  prepand=' AM';
  }
  }
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);

currentTime.addEventListener('click', function() {
  alert("Current Time : "+hour + prepand + " : " + minute + " : " + second);
  console.log(this) // this refers to the click event
})

function buttonClicked() {
  console.log("Button is clicked");
  alert("You created a javascript Event Listener!")
}
btnClick.addEventListener('click', buttonClicked)

btnClick.addEventListener('click', function() {
  console.log("Button is clicked using anonymous function");
  document.body.style.backgroundColor = "green";
  document.body.className = 'body-style'; //uses CSS class to modify HTML during Event
}) //anonymous functions are better to use over specific functioned tied to IDs
btnClick.addEventListener('mouseover',function() {
  console.log("You just moused over this button.")
})
bannerDiv.addEventListener('click', function() {
  console.log("banner div clicked");
  bannerDiv.className = 'red-square';
})
