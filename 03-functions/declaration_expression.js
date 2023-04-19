// Function Expression - with fucntion expression you have to initialization before using
// You don't need to do that with declare function - this is called file hoisting
const addPlusSign = function (value) {
  return "+" + value;
};

declareFunc();

function declareFunc() {
  console.log("Dont need to init");
}

// Arrow Fuction

// function add(a, b) {
//   return a + b
// }

// implicit return
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// immediately invoke fuction (IIFE) - to avoid global scope polution
(function () {
  const user = "Max";
  const hello = () => console.log("Hello from IIFE function");
  hello();
}.apply());
