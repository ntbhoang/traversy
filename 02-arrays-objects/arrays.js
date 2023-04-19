// Array literal
const numbers = [12, 15, 463, 1242345];

// Array constructor
// const fruits = new Array("Apple", "Orange", "Grape");

// Mixed array
const mixed = [1, "something", false];

// Spread operator
const fruits = ["Apple", "Grape", "Orange", "Lemon"];
const berries = ["strawberry", "blueberry", "rasberry"];

let x = [...fruits, ...berries];

// flat an array
const nestedArr = [1, 2, 3, [45, -10, 3]];
nestedArr.flat();

// static methods on Array obj
staticArr = Array.isArray("Hello");
console.log(staticArr);

newArr = Array.from("e436y46");
console.log(newArr);

let original_arr = [1, 2, 3, 4, 5];
modifiedArr = original_arr.concat([0, 6]).sort().reverse();
console.log(modifiedArr);
