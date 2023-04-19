let x;

const number = new Number(5.4232);

x = number.toFixed(2);
//console.log(x);

x = number.toPrecision(2);
//console.log(x);

/*
  - Challenge number
*/

let z = Math.floor(Math.random() * 100);
let y = Math.floor(Math.random() * 50);

let sum = y + z;
let differentOuput = z - y;
let productOutput = x * y;
let quotientOutput = z / y;

console.log(sum);
console.log(differentOuput);
console.log();
console.log(sum);

console.log(z);
console.log(y);
