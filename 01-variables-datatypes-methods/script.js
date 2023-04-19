// const firstname = "Max";

// const age = 38;

// const hasKids = true;

// const aptNumber = null;

// console.log(aptNumber, typeof Boolean);

// let score;

// console.log(score);

// Typconversion - casting
let amount = 100;

console.log(amount, typeof amount);

amount = amount.toString();
console.log(amount, typeof amount);

// Type coercion
let x;

x = 5 + "5"; // coercion a number to a string

console.log(x, typeof x);

x = 5 * "5"; // coercion a number to a number for mul case

console.log(x, typeof x);

x = Number(null);

console.log(x, typeof x);

x = 5 + true; // true is 1 as a nunmber therefore the reusult will be 6

console.log(x, typeof x);

x = 5 + false; // false is 0 as number therefore the result is 5

console.log(x, typeof x);

x = 5 + undefined; // NaN number

console.log(x, typeof x);
